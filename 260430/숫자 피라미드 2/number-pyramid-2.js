const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim()

let N = Number(arr);
let currentNum = 1

for (let i = 1; i <= N; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
        row.push(currentNum);
        currentNum++;
    }
    console.log(row.join(' '))
}