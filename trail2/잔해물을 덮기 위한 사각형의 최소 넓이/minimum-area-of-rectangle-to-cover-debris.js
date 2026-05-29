const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

// 2차원 배열  생성. 
let arr = Array.from({ length: 2005 }, () => Array(2005).fill(0));

// 첫 번째 직사각형 
let x1 = rect1[0] + 1000;
let y1 = rect1[1] + 1000;
let x2 = rect1[2] + 1000;
let y2 = rect1[3] + 1000;

// 배열에 1 넣기
for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
        arr[j][k] = 1
    }
}

// 두 번째 직사각형 
x1 = rect2[0] + 1000;
y1 = rect2[1] + 1000;
x2 = rect2[2] + 1000;
y2 = rect2[3] + 1000;

// 배열에 다 0 넣기
for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
        arr[j][k] = 0
    }
}


// 최소, 최대 좌표를 저장할 변수 초기화
let minX = 2005, maxX = 0;
let minY = 2005, maxY = 0;
let hasOne = false; // 1이 하나도 안 남았을 경우를 체크하기 위함

for (let j = 0; j < 2005; j++) {
    for (let k = 0; k < 2005; k++) {
        if (arr[j][k] === 1) {
            hasOne = true;
            if (j < minX) minX = j;
            if (j > maxX) maxX = j;
            if (k < minY) minY = k;
            if (k > maxY) maxY = k;
        }
    }
}

if (!hasOne) {
    console.log(0);
} else {
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    console.log(width * height);
}