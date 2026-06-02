const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let maxCount = 0; cnt = 0;

for (let i = 0; i < n; i++) {
    cnt = (arr[i] > t) ? cnt + 1 : 0;
    maxCount = Math.max(maxCount, cnt)
}
console.log(maxCount)