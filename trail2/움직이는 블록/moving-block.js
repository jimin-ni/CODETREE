const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);

// 모든 위치에 놓인 블럭의 개수가 동일 -> 평균값
let allBlocks = 0
for (let i = 0; i < n; i++) {
    allBlocks += blocks[i]
}

// 평균값
let avgBlocks = Math.floor(allBlocks / n);

let changBlocks = []
let answer = 0
for (let i = 0; i < n; i++) {
    changBlocks[i] = avgBlocks - blocks[i]

    if (changBlocks[i] > 0) {
        answer += changBlocks[i]
    }
}

console.log(answer)