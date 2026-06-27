const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 1행 3열 격자는 x=0 일때 y가 3개씩 순회 
let coinMax = 0

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - 3; j++) {
        let coinInBoxA = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]

        for (let l = 0; l < n; l++) {
            for (let k = 0; k <= n - 3; k++) {
                if (i === l && Math.abs(j - k) < 3) {
                    continue;
                }
                let coinInBoxB = grid[l][k] + grid[l][k + 1] + grid[l][k + 2]


                let coinInBoxAB = coinInBoxA + coinInBoxB
                coinMax = Math.max(coinMax, coinInBoxAB)
            }
        }

    }
}

console.log(coinMax)