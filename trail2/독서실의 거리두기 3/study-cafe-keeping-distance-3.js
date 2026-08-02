const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const INT_MAX = Number.MAX_SAFE_INTEGER;
const n = Number(input[0]);
const seats = input[1].split("").map(Number);

let maxDist = 0;
let [maxI, maxJ] = [-1, -1];
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
        for (let j = i + 1; j < n; j++) {
            if (seats[j] === 1) {
                if (j - i > maxDist) {
                    maxDist = j - i;
                    [maxI, maxJ] = [i, j];
                }

                break;
            }
        }
    }
}

const mid = maxI + Math.floor(maxDist / 2);
seats[mid] = 1;

let ans = INT_MAX;
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
        for (let j = i + 1; j < n; j++) {
            if (seats[j] === 1) {
                ans = Math.min(ans, j - i);
                break;
            }
        }
    }
}

console.log(ans);