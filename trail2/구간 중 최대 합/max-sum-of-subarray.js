const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 연속한 k개의 수 고르기
let maxNum = 0

for (let i = 0; i < n - k + 1; i++) {
    let sumNum = 0
    for (let j = i; j < i + k; j++) {
        sumNum += arr[j]
        maxNum = Math.max(maxNum, sumNum)
    }
}
console.log(maxNum)