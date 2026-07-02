const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    baskets.push([candy, position]);
}

// 사탕개수, 바구니 좌표. 
// position 기준으로 오름차순 정렬
let orderArr = []
orderArr = baskets.sort((a, b) => a[1] - b[1]);

// 최대 사탕의 수
let maxCandy = 0

const maxPosition = orderArr[orderArr.length - 1][1]

for (let c = 0; c <= maxPosition; c++) {
    //  [c−K, c+K] 구간의 사탕의 수 측정
    let countCandy = 0;

    // 기준 바구니의 실제 좌표를 가져옵니다.

    for (let j = 0; j < orderArr.length; j++) {
        const targetPosition = orderArr[j][1]

        if (targetPosition >= c - k && targetPosition <= c + k) {
            countCandy += orderArr[j][0]
        }
    }

    maxCandy = Math.max(maxCandy, countCandy)
}

console.log(maxCandy)