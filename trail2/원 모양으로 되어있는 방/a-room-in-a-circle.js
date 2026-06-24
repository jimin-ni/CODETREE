const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let sumArry = 0
let minDistanc = Infinity
let answer = 0

// 0 번 부터 n-1 까지 시작점이라고 가정
for (let i = 0; i < n; i++) {
    //  startNum 칸에 모든 사람들이 들어감.
    let startNum = i
    let moveArr = []


    // 해당 방에서 목적지까지 사람들이 이동해서 들어감
    // i 번째 방에서 시작해서 0, 1, 2 ... 번째 방으로 이동하는 거리 측정
    // 각 목적지 방의 번호가 index. 목적지 까지 이동 -> 이동한 거리 * 수용인원(arr[i])
    for (let j = 0; j < n; j++) {
        if (startNum <= j) {

            moveArr.push((j - startNum) * arr[j])
        } else {
            moveArr.push((n - startNum + j) * arr[j])
        }
    }

    sumArry = moveArr.reduce((a, b) => a + b, 0)

    minDistanc = Math.min(minDistanc, sumArry)
}

console.log(minDistanc)