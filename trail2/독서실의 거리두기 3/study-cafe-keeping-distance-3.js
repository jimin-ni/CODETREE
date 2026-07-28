const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const seats = input[1].split("").map(Number);

// 1과 1 사이의 거리가 최대가 되도록 한다. 
// 가장 가까운 두 사람의 거리의 최댓값 출력


let maxMinDist = 0

for (let i = 0; i < n; i++) {
    if (seats[i] === 0) {
        // 비어있는 자리다
        seats[i] = 1

        //현재 배치 상태에서 가장 가까운 두 사람 간의 거리를 구한다
        let minDist = Infinity;
        let lastOneIdx = -1;
        for (let j = 0; j < n; j++) {
            if (seats[j] === 1) {
                if (lastOneIdx !== -1) {
                    minDist = Math.min(minDist, j - lastOneIdx);
                }
                lastOneIdx = j;
            }
        }
        maxMinDist = Math.max(maxMinDist, minDist)
        seats[i] = 0
    }
}

console.log(maxMinDist)
