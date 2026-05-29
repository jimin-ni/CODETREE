const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// 2차원 배열  생성. 
let arr = Array.from({ length: 205 }, () => Array(205).fill(0));


// 반복
for (let i = 0; i < n; i++) {
    // xy값 넣기
    x1 = rects[i][0] + 100
    y1 = rects[i][1] + 100
    x2 = x1 + 8
    y2 = y1 + 8

    // 배열에 1 넣기
    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            arr[j][k] = 1
        }
    }
}

let count = arr.flat().filter(val => val === 1).length;
console.log(count)