const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
    const [v, t] = input[index++].split(' ').map(Number);
    A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
    const [v, t] = input[index++].split(' ').map(Number);
    B_moves.push([v, t]);
}

// 시간이 index인 a의 이동을 기록할 배열, b의 이동을 기록할 배열을 초기화합니다.
let arrA = []
let arrB = []

//현재 위치/시간 기록
let nowPlaceA = 0
let nowPlaceB = 0


// a의 이동 기록
for (let i = 0; i < n; i++) {
    const [v, t] = A_moves[i];

    for (let j = 0; j < t; j++) {
        nowPlaceA += v
        arrA.push(nowPlaceA)
    }
}

// b의 이동 기록
for (let i = 0; i < m; i++) {
    const [v, t] = B_moves[i];

    for (let j = 0; j < t; j++) {
        nowPlaceB += v
        arrB.push(nowPlaceB)
    }
}

let result = []
for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] > arrB[i]) {
        result.push('A')
    } else if (arrA[i] < arrB[i]) {
        result.push('B')
    } else {
        result.push('AB')
    }
}

let changeCount = 0;
let currentLeader = result[0];

for (let i = 0; i <= result.length; i++) {
    if (result[i] !== currentLeader) {
        changeCount++;

        currentLeader = result[i]
    }
}


console.log(changeCount)