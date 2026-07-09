
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

let answerCount = 0;

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (i === j) continue;
        for (let k = 1; k <= 9; k++) {
            if (i === k || j === k) continue;

            const cand = `${i}${j}${k}`;
            let isPossible = true;

            for (let m = 0; m < n; m++) {
                const [B, targetC1, targetC2] = arr[m];
                const bStr = String(B); 
                let count1 = 0;
                let count2 = 0;

                for (let idx = 0; idx < 3; idx++) {
                    if (cand[idx] === bStr[idx]) {
                        count1++; // 숫자와 자리가 모두 일치
                    } else if (cand.includes(bStr[idx])) {
                        count2++; // 숫자는 있지만 자리가 다름
                    }
                }

                if (count1 !== targetC1 || count2 !== targetC2) {
                    isPossible = false;
                    break;
                }
            }

            if (isPossible) {
                answerCount++;
            }
        }
    }
}

console.log(answerCount);