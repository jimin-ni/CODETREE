const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let minSum = 100000000;
for (let i = 0; i < n; i++) {
    let moveLength = 0; // 이동거리

    // i번째 집으로 다 모일 때
    for (let j = 0; j < n; j++) {
        if (j != i) {
            moveLength += arr[j] * (Math.abs(j - i))
        }
    }

    minSum = Math.min(minSum, moveLength)
}

console.log(minSum)