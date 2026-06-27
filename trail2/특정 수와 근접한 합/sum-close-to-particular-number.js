const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ans = 99999;

// arr 내의 수 중에 2개만 제외하기  - 2중 for문
for (let i = 0; i < n; i++) {
    for (let k = i + 1; k < n; k++) {
        //남은 숫자 더하기 = t
        let t = 0
        for (let m = 0; m < n; m++) {
            t += arr[m]
        }

        t = t - arr[i] - arr[k]

        let ST = Math.abs(s - t)
        ans = Math.min(ans, ST)
    }
}
console.log(ans)