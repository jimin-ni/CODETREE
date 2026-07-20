const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// 오름차순 정렬 
let sortArr = arr.sort((a, b) => a - b)

let minDiff = Infinity 

for(let i = 0; i < n; i++){
    diff = arr[i+n] - arr[i]

    minDiff = Math.min(minDiff, diff)
}

console.log(minDiff)