const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let maxCount = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
    cnt = (arr[i] > arr[i-1]) ? cnt + 1 : 1;
    maxCount = Math.max(maxCount, cnt)
}

console.log(maxCount)