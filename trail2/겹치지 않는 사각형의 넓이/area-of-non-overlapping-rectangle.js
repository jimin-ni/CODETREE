/*
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const arr = Array.from({ length: 2005 }, () => Array(2005).fill(0));


let x1, y1, x2, y2 = 0

x1 = rectA[0] + 1000
y1 = rectA[1] + 1000
x2 = rectA[2] + 1000
y2 = rectA[3] + 1000

for (let k = x1; k < x2; k++) {
    for (let j = y1; j < y2; j++) {
        arr[k][j] = 1
    }
}

x1 = rectB[0] + 1000
y1 = rectB[1] + 1000
x2 = rectB[2] + 1000
y2 = rectB[3] + 1000

for (let k = x1; k < x2; k++) {
    for (let j = y1; j < y2; j++) {
        arr[k][j] = 1
    }
}


x1 = rectM[0] + 1000
y1 = rectM[1] + 1000
x2 = rectM[2] + 1000
y2 = rectM[3] + 1000

for (let k = x1; k < x2; k++) {
    for (let j = y1; j < y2; j++) {
        if (arr[k][j] == 1)
            arr[k][j] = 0
    }
}

let count = arr.flat().filter(val => val === 1).length;
console.log(count)
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// 직사각형의 순수 넓이를 구하는 함수
function getArea(rect) {
    return (rect[2] - rect[0]) * (rect[3] - rect[1]);
}

// 두 직사각형의 겹치는 넓이를 구하는 함수
function getOverlapArea(rect1, rect2) {
    const overlapX = Math.max(0, Math.min(rect1[2], rect2[2]) - Math.max(rect1[0], rect2[0]));
    const overlapY = Math.max(0, Math.min(rect1[3], rect2[3]) - Math.max(rect1[1], rect2[1]));
    return overlapX * overlapY;
}

// 1. A와 B의 전체 넓이 합
const totalArea = getArea(rectA) + getArea(rectB);

// 2. M과 겹쳐서 가려지는 넓이 합
const maskedArea = getOverlapArea(rectA, rectM) + getOverlapArea(rectB, rectM);

// 3. 남은 넓이 출력
console.log(totalArea - maskedArea);
