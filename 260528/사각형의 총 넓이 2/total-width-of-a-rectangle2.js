const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 공간 정의
const arr = Array.from({ length: 205 }, () => Array(205).fill(0));

// 사각형 계산
for (let i = 0; i < n; i++) {
    let x1, x2, y1, y2 = 0;

    x1 = rects[i][0] + 100;
    y1 = rects[i][1] + 100;
    x2 = rects[i][2] + 100;
    y2 = rects[i][3] + 100;

    // 배열에 +1 하기
    for (let k = x1; k < x2; k++) {
        for (let j = y1; j < y2; j++) {
            arr[k][j] = 1
        }
    }
}

// 배열에 +1 인 것만
let count = arr.flat().filter(val => val === 1).length;
console.log(count);
