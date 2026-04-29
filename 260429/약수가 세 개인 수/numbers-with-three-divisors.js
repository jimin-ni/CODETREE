const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ');

let start = Number(arr[0])
let end = Number(arr[1])
let sum = 0;

for (let i = start; i <= end; i++) {
    let left = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            // 나머지가 안나온다
            left++
        }
    }
    if (left == 3) {
        // 나머지가 3인 수.
        sum++
    }
}

console.log(sum)