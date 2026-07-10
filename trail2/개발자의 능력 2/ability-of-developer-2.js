const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[0].split(" ").map(Number);

// arr 내 모든 수를 더한 합
let arrAll = 0
for (let i = 0; i < 6; i++) {
    arrAll += arr[i]
}

let minInterval = Infinity

for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
        // 팀 A 선정
        let arrA = arr[i] + arr[j]

        for (let k = 0; k < 6; k++) {
            for (let l = k + 1; l < 6; l++) {

                if (k === i || k === j || l === i || l === j) {
                    continue;
                }

                // 팀 B 선정
                let arrB = arr[k] + arr[l]

                // 팀 C 선정
                let arrC = arrAll - arrA - arrB

                //팀원의 능력 총합이 가장 큰 팀
                let maxTeam = Math.max(arrA, arrB, arrC)

                //팀원의 능력 총합이 가장 작은 팀
                let minTeam = Math.min(arrA, arrB, arrC)

                //(팀원의 능력 총합이 가장 큰 팀) - ( 팀원의 능력 총합이 가장 작은 팀)
                let interval = maxTeam - minTeam

                // (팀원의 능력 총합이 가장 큰 팀) - ( 팀원의 능력 총합이 가장 작은 팀) <- 최소값 찾기
                minInterval = Math.min(minInterval, interval)

            }
        }

    }
}

// 최소화 할 때의 두 값의 차이?
console.log(minInterval)