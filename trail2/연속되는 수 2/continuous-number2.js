const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let maxCount = 1; cnt = 1;

for (let i = 1; i < n; i++) {
    cnt = (arr[i] == arr[i - 1]) ? cnt + 1 : 1;
    maxCount = Math.max(maxCount, cnt);
}

console.log(maxCount)