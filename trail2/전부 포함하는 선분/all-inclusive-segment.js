const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const x1 = [];
const x2 = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    x1.push(a);
    x2.push(b);
}

let ans = Infinity

for (let i = 0; i < n; i++) {
    let minX1 = Infinity;
    let maxX2 = -Infinity;

    //j번째 선분 제외
    for (let j = 0; j < n; j++) {
        if (i === j) { continue }
        minX1 = Math.min(minX1, x1[j])
        maxX2 = Math.max(maxX2, x2[j])
    }

    let length = maxX2 - minX1
    ans = Math.min(ans, length)
}

console.log(ans)