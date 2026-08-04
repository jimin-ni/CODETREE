const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const seats = input[1].split("").map(Number);

let maxMinDistance = 0;

// 1. 모든 빈 좌석(0)에 대해 새로 1을 놓는 시도를 해봅니다.
for (let i = 0; i < n; i++) {
  if (seats[i] === 0) {
    seats[i] = 1; // 사람을 임시로 배치

    // 2. 현재 상태에서 1과 1 사이의 최소 거리를 구합니다.
    let currentMinDist = Infinity;
    let prevIndex = -1;

    for (let j = 0; j < n; j++) {
      if (seats[j] === 1) {
        if (prevIndex !== -1) {
          const dist = j - prevIndex;
          currentMinDist = Math.min(currentMinDist, dist);
        }
        prevIndex = j;
      }
    }

    // 3. 최소 거리들 중에서 최댓값을 갱신합니다.
    maxMinDistance = Math.max(maxMinDistance, currentMinDist);

    seats[i] = 0; // 원상복구
  }
}

console.log(maxMinDistance);