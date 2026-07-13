const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

let ans = 0
let diff = 0

for (let i = 0; i < n; i++) {
    diff += (a[i] - b[i])
    ans += Math.abs(diff)
}

console.log(ans)