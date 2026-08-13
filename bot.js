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
const TARGET_PATH = ['trail2', 'trail3'];

// ───────────────────────────────────────────
// KST 시간 계산
// ───────────────────────────────────────────
function getKSTNow() {
  const now = new Date();
  return new Date(now.getTime() + 9 * 60 * 60 * 1000);
}

function getKSTHour() {
  return getKSTNow().getUTCHours();
}

function getKSTDate(offsetDays = 0) {
  const kst = getKSTNow();
  kst.setUTCDate(kst.getUTCDate() + offsetDays);
  const yy = String(kst.getUTCFullYear()).slice(2);
  const mm = String(kst.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(kst.getUTCDate()).padStart(2, '0');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[kst.getUTCDay()];
  return `${yy}.${mm}.${dd}(${day})`;
}

function getKSTDateStr(offsetDays = 0) {
  const kst = getKSTNow();
  kst.setUTCDate(kst.getUTCDate() + offsetDays);
  const yy = kst.getUTCFullYear();
  const mm = String(kst.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(kst.getUTCDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

function getKSTDay() {
  return getKSTNow().getUTCDate(); // 1~31
}

// ───────────────────────────────────────────
// Discord 웹훅 메시지 전송
// ───────────────────────────────────────────
async function sendMessage(content) {
  await axios.post(`${WEBHOOK_URL}?thread_id=${THREAD_ID}`, { content });
}

async function sendImage(imagePath, content = '') {
  const FormData = require('form-data');
  const form = new FormData();
  form.append('file', fs.createReadStream(imagePath), 'capture.png');
  if (content) form.append('payload_json', JSON.stringify({ content }));
  await axios.post(`${WEBHOOK_URL}?thread_id=${THREAD_ID}`, form, {
    headers: form.getHeaders(),
  });
}

// ───────────────────────────────────────────
// penalty.json 읽기/쓰기/리셋
// ───────────────────────────────────────────
function loadPenalty() {
  if (!fs.existsSync(PENALTY_FILE)) {
    return { totalAmount: 0, dates: [] };
  }
  return JSON.parse(fs.readFileSync(PENALTY_FILE, 'utf-8'));
}

function savePenalty(data) {
  fs.writeFileSync(PENALTY_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function resetPenalty() {
  savePenalty({ totalAmount: 0, dates: [] });
}

// ───────────────────────────────────────────
// GitHub API
// ───────────────────────────────────────────
async function getCommitsOnDate(kstDateStr) {
  const since = `${kstDateStr}T00:00:00+09:00`;
  const until = `${kstDateStr}T23:59:59+09:00`;

  // trail2, trail3 각각 조회 후 합치기
  const results = await Promise.all(
    TARGET_PATHS.map(targetPath => {
      const url = `https://api.github.com/repos/${REPO}/commits?sha=${BRANCH}&path=${targetPath}&since=${since}&until=${until}`;
      return axios.get(url, { headers: { 'User-Agent': 'codetree-bot' } }).then(r => r.data);
    })
  );

  // 두 결과 합쳐서 중복 제거 (sha 기준)
  const allCommits = results.flat();
  const unique = [...new Map(allCommits.map(c => [c.sha, c])).values()];
  return unique;
}

async function getNewFolderUrl(sha) {
  const url = `https://api.github.com/repos/${REPO}/commits/${sha}`;
  const res = await axios.get(url, { headers: { 'User-Agent': 'codetree-bot' } });
  const files = res.data.files || [];
  for (const file of files) {
    // trail2 또는 trail3 폴더 감지
    const match = file.filename.match(/^(trail2|trail3)\/([^/]+)\//);
    if (match) {
      const trailFolder = match[1]; // 'trail2' or 'trail3'
      const folderName = match[2];
      return `https://github.com/${REPO}/tree/${BRANCH}/${trailFolder}/${encodeURIComponent(folderName)}`;
    }
  }
  return null;
}

// ───────────────────────────────────────────
// Playwright: 페이지 캡처
// ───────────────────────────────────────────
async function capturePage(url) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  const screenshotPath = '/tmp/capture.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await browser.close();
  return screenshotPath;
}


// ───────────────────────────────────────────
// 메인 로직
// ───────────────────────────────────────────
async function main() {
  const kstHour = getKSTHour();
  const kstDay = getKSTDay();
  console.log(`Event: ${EVENT_NAME}, KST: ${getKSTDateStr()} ${kstHour}시`);

  // ── CASE 1: push 이벤트 ──────
  if (EVENT_NAME === 'push') {
    console.log('Push 이벤트 감지 → 캡처 시작');
    const folderUrl = await getNewFolderUrl(COMMIT_SHA);
    if (!folderUrl) {
      console.log('trail2 내 새 폴더 없음 → 종료');
      return;
    }
    const imgPath = await capturePage(folderUrl);
    const today = getKSTDate();
    await sendImage(imgPath, `✅ **${today} 커밋 완료!**`);
    console.log('디스코드 전송 완료');
    return;
  }

  // ── CASE 2: 스케줄 이벤트 ──────
  if (EVENT_NAME === 'schedule') {

    // 매달 1일 00시: penalty.json 초기화
    if (kstDay === 1 && kstHour >= 0 && kstHour <= 1) {
      console.log('월 초기화 → penalty.json 리셋');
      resetPenalty();
      await sendMessage(`🔄 **새 달이 시작됐어요! 벌금 기록을 초기화했습니다.**`);
      console.log('초기화 완료');
      return;
    }
    console.log(`KST ${kstHour}시 → 해당 없는 시간대, 종료`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
