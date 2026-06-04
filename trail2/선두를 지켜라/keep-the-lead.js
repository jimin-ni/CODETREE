const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// 거리는 v x t이다. 선두가 바뀌는 횟수를 알기 위해서는 시간을 기준으로 알아야 함. 
// a, b의 이동을 알기위해서 index를 시간으로 하고 그 시점의 누적거리를 적어야 함. 

// a, b 배열 만들기.
let arrA = new Array(1000005).fill(0);
let arrB = new Array(1000005).fill(0);

let nowState = 0;
let nowTime = 0;

for (let i = 0; i < n; i++) {
    const [v, t] = aData[i];

    for (let j = 0; j < t; j++) {
        nowState += v;
        arrA[nowTime] = nowState
        nowTime++;
    }
}

nowState = 0;
nowTime = 0;

for (let i = 0; i < m; i++) {
    const [v, t] = bData[i];

    for (let j = 0; j < t; j++) {
        nowState += v;
        arrB[nowTime] = nowState;
        nowTime++;
    }
}

// a, b배열을 순회하면서 값이 동일하지 않은 것 = 선두가 바뀐 것
// 3. 선두가 바뀌는 횟수 계산
let change = 0;
let leader = 0;

for (let i = 0; i < nowTime; i++) {
    let currentLeader = leader;

    if (arrA[i] > arrB[i]) {
        currentLeader = 1 // A
    } else if (arrA[i] < arrB[i]) {
        currentLeader = 2 //B
    }

    if (leader !== 0 && leader !== currentLeader) {
        change++;
    }

    leader = currentLeader
}

console.log(change)