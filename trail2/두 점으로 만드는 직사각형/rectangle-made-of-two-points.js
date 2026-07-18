const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);
// Please write your code here.
// 두 직사각형을 모두 포함하는 최소/최대 좌표 구하기
const minX = Math.min(x1, a1);
const maxX = Math.max(x2, a2);
const minY = Math.min(y1, b1);
const maxY = Math.max(y2, b2);

// 가로와 세로 길이 계산
const width = maxX - minX;
const height = maxY - minY;

// 최소 넓이 출력
console.log(width * height);
