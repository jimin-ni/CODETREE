const { chromium } = require('playwright');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const THREAD_ID = process.env.DISCORD_THREAD_ID;
const USER_ID = process.env.DISCORD_USER_ID;
const EVENT_NAME = process.env.GITHUB_EVENT_NAME;
const COMMIT_SHA = process.env.GITHUB_SHA;

const PENALTY_FILE = path.join(__dirname, 'penalty.json');
const REPO = 'jimin-ni/CODETREE';
const BRANCH = 'main';
const TARGET_PATH = 'trail2';

//  KST 날짜 문자열 반환
function getKSTDate(offsetDays = 0) {
  const now = new Date();
  now.setHours(now.getHours() + 9); // UTC → KST
  now.setDate(now.getDate() + offsetDays);
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[now.getDay()];
  return `${yy}.${mm}.${dd}(${day})`;
}

function getKSTHour() {
  const now = new Date();
  now.setHours(now.getHours() + 9);
  return now.getHours();
}

// Discord 웹훅 메시지 전송
async function sendMessage(content) {
  await axios.post(`${WEBHOOK_URL}?thread_id=${THREAD_ID}`, { content });
}

// Discord 웹훅 이미지 전송
async function sendImage(imagePath, content = '') {
  const FormData = require('form-data');
  const form = new FormData();
  form.append('file', fs.createReadStream(imagePath), 'capture.png');
  if (content) form.append('payload_json', JSON.stringify({ content }));

  await axios.post(`${WEBHOOK_URL}?thread_id=${THREAD_ID}`, form, {
    headers: form.getHeaders(),
  });
}

// penalty.json 읽기/쓰기
function loadPenalty() {
  if (!fs.existsSync(PENALTY_FILE)) {
    return { totalAmount: 0, dates: [] };
  }
  return JSON.parse(fs.readFileSync(PENALTY_FILE, 'utf-8'));
}

function savePenalty(data) {
  fs.writeFileSync(PENALTY_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// GitHub API: 오늘 trail2에 커밋 있었는지 확인
async function getTodayCommits() {
  const kstNow = new Date();
  kstNow.setHours(kstNow.getHours() + 9);
  const dateStr = kstNow.toISOString().slice(0, 10); 

  const since = `${dateStr}T00:00:00+00:01`;
  const until = `${dateStr}T23:59:59+09:00`;

  const url = `https://api.github.com/repos/${REPO}/commits?sha=${BRANCH}&path=${TARGET_PATH}&since=${since}&until=${until}`;
  const res = await axios.get(url, {
    headers: { 'User-Agent': 'codetree-bot' },
  });
  return res.data; // 커밋 배열
}

// GitHub API: 최신 커밋에서 trail2 내 새 폴더 URL 추출
async function getNewFolderUrl(sha) {
  const url = `https://api.github.com/repos/${REPO}/commits/${sha}`;
  const res = await axios.get(url, {
    headers: { 'User-Agent': 'codetree-bot' },
  });

  const files = res.data.files || [];
  for (const file of files) {
    // trail2/폴더명/... 패턴에서 폴더명 추출
    const match = file.filename.match(/^trail2\/([^/]+)\//);
    if (match) {
      const folderName = match[1];
      return `https://github.com/${REPO}/tree/${BRANCH}/trail2/${encodeURIComponent(folderName)}`;
    }
  }
  return null;
}

//  페이지 캡처
async function captureePage(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle' });

  // README 렌더링까지 기다리기
  await page.waitForTimeout(2000);

  const screenshotPath = '/tmp/capture.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await browser.close();
  return screenshotPath;
}

// 벌금 메시지 
function buildPenaltyMessage(penalty) {
  const today = getKSTDate();
  const totalAmount = penalty.totalAmount;
  const dates = penalty.dates.map(d => d).join(', ');
  return `${today}\n\n* 누적 벌금: ${totalAmount}원\n* 누적일: ${dates}`;
}

// 메인 로직
async function main() {
  console.log(`Event: ${EVENT_NAME}, KST Hour: ${getKSTHour()}`);

  // ── CASE 1: push 이벤트 (커밋 발생) ──────
  if (EVENT_NAME === 'push') {
    console.log('Push 이벤트 감지 → 캡처 시작');

    const folderUrl = await getNewFolderUrl(COMMIT_SHA);
    if (!folderUrl) {
      console.log('trail2 내 새 폴더 없음 → 종료');
      return;
    }

    console.log(`캡처 URL: ${folderUrl}`);
    const imgPath = await captureePage(folderUrl);
    const today = getKSTDate();
    await sendImage(imgPath, `✅ **${today} 커밋 완료!**`);
    console.log('디스코드 전송 완료');
    return;
  }

  // ── CASE 2: 23시 스케줄 (UTC 14:00) ──────
  if (EVENT_NAME === 'schedule') {
    const hour = getKSTHour();

    // 23시 체크
    if (hour === 23) {
      console.log('23시 체크 → 오늘 커밋 확인');
      const commits = await getTodayCommits();
      if (commits.length === 0) {
        await sendMessage(`<@${USER_ID}> ⚠️ 오늘 아직 커밋이 없어요! 자정 전에 올려주세요 🔥`);
        console.log('경고 메시지 전송 완료');
      } else {
        console.log('커밋 있음 → 경고 없음');
      }
      return;
    }

    // 자정(00시) 체크 → 전날 커밋 여부 확인
    if (hour === 0) {
      console.log('자정 체크 → 어제 커밋 확인');
      const commits = await getTodayCommits(); 
      // 어제 날짜로 재조회
      const kstYesterday = new Date();
      kstYesterday.setHours(kstYesterday.getHours() + 9 - 24);
      const dateStr = kstYesterday.toISOString().slice(0, 10);
      const since = `${dateStr}T00:00:00+09:00`;
      const until = `${dateStr}T23:59:59+09:00`;
      const url = `https://api.github.com/repos/${REPO}/commits?sha=${BRANCH}&path=${TARGET_PATH}&since=${since}&until=${until}`;
      const res = await axios.get(url, { headers: { 'User-Agent': 'codetree-bot' } });
      const yesterdayCommits = res.data;

      if (yesterdayCommits.length === 0) {
        console.log('어제 커밋 없음 → 벌금 누적');
        const penalty = loadPenalty();
        penalty.totalAmount += 200;
        penalty.dates.push(getKSTDate(-1)); 
        savePenalty(penalty);

        const msg = buildPenaltyMessage(penalty);
        await sendMessage(`❌ **1일 커밋 미달 벌금 발생!**\n\n${msg}`);
        console.log('벌금 메시지 전송 완료');
      } else {
        console.log('어제 커밋 있음 → 벌금 없음');
      }
      return;
    }
  }

  console.log('해당 없는 케이스 → 종료');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
