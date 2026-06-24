const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let maxNum = 0
// Please Write your code here.
for (let i = 0; i < n; i++) {
    let x = arr[i]
    for (let j = i + 2; j < n; j++) {
        let y = arr[j]
        let sumNum = x + y
        maxNum = Math.max(maxNum, sumNum)
    }
}

console.log(maxNum)