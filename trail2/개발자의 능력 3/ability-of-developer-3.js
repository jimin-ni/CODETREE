const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

//두 팀의 총합간 차이
let minScore = Infinity

// 첫 번째 팀 합, 두 번째 팀 합, 두 팀의 총합 간 차이 구하기
function getDiff(i, j, k) {
    let sum1 = arr[i] + arr[j] + arr[k]
    let sum2 = 0

    arr.forEach(a => {
        sum2 += a
    })

    sum2 = sum2 - sum1
    return Math.abs(sum1 - sum2)
}

for (let m = 0; m < arr.length; m++) {

    for (let n = m + 1; n < arr.length; n++) {
        for (let z = n + 1; z < arr.length; z++) {
            minScore = Math.min(minScore, getDiff(m, n, z))
        }
    }
}

// 두 팀의 총합간 차이 중 최소값 출력
console.log(minScore)