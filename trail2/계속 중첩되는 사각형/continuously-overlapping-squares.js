const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

let arr = Array.from({ length: 2005 }, () => Array(2005).fill(""));



for (let i = 0; i < rectangles.length; i++) {
    if (i % 2 === 0) {
        // 빨간색
        for (let j = rectangles[i][0] + 100; j < rectangles[i][2] + 100; j++) {
            for (let k = rectangles[i][1] + 100; k < rectangles[i][3] + 100; k++) {
                arr[j][k] = 'R'
            }
        }
    } else {
        // 파란색
        for (let j = rectangles[i][0] + 100; j < rectangles[i][2] + 100; j++) {
            for (let k = rectangles[i][1] + 100; k < rectangles[i][3] + 100; k++) {
                arr[j][k] = 'B'
            }
        }
    }
}


let count = arr.flat().filter(val => val === 'B').length;
console.log(count)