const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(line => line.trim().split(' ').map(Number));

// 3으로 묶을 수 있는 개수 세기
let N = n - 3 + 1 // n=5, N=3
let maxCoin = 0

for (let i = 0; i < n; i++) {
    // 3개씩 끊어서 봐야하는데  n을 기준으로 봐야함

    for (let j = 0; j < N; j++) { // i=0, j=0, j=1, j=2 
        let coinIn = 0
        if (arr[i][j] === 1) {
            coinIn++
        } if (arr[i][j + 1] === 1) {
            coinIn++
        } if (arr[i][j + 2] === 1) {
            coinIn++
        }

        maxCoin = Math.max(maxCoin, coinIn)
    }

}

console.log(maxCoin)