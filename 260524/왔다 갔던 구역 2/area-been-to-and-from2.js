const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// 1. 최대 이동 거리를 고려해 배열 크기를 2005로 확장
let arr = Array(2005).fill(0);
// 2. 시작점을 1000으로 설정 (음수 좌표 대응)
let startPoint = 1000;

for (let i = 0; i < n; i++) {
    // 3. 공백으로 나누어 거리(x)와 방향(dir)을 올바르게 추출
    const [xStr, dir] = commands[i].split(' ');
    const x = Number(xStr);

    if (dir == 'R') {
        // 오른쪽 이동: 현재 위치부터 (현재 위치 + x - 1) 칸까지 카운트
        for (let j = startPoint; j < startPoint + x; j++) {
            arr[j] += 1;
        }
        startPoint = startPoint + x;
    } else {
        // 왼쪽 이동: (현재 위치 - x)부터 (현재 위치 - 1) 칸까지 카운트
        for (let j = startPoint - x; j < startPoint; j++) {
            arr[j] += 1;
        }
        startPoint = startPoint - x;
    }
}

// 4. 2번 이상 지나간 구역의 '총 개수'를 구하여 출력
let ans = 0;
for (let i = 0; i < 2005; i++) {
    if (arr[i] >= 2) {
        ans++;
    }
}
console.log(ans);