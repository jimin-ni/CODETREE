const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.
let arrA = [0]
let arrB = [0]

// A, B 배열의 index는 시간, 값은 그 초의 위치. 이동한 위치사

let stateNow = 0;
let timeNow = 0;
let stateNowB = 0;
let timeNowB = 0;

// A의 시간별 위치를 배열로 기록
for (let i = 0; i < n; i++) {
    const [tStr, d] = movesA[i].split(' ');
    let t = Number(tStr)
    for (let j = 0; j < t; j++) {
        if (d == 'L') {
            stateNow--;
            arrA.push(stateNow);

            timeNow++;
        } else {
            stateNow++;
            arrA.push(stateNow);

            timeNow++;
        }
    }
}



for (let i = 0; i < m; i++) {
    const [tStr, d] = movesB[i].split(' ')
    let t = Number(tStr)

    for (let j = 0; j < t; j++) {
        if (d == 'L') {
            stateNowB--;

            arrB.push(stateNowB);
            timeNowB++;
        } else {
            stateNowB++;
            arrB.push(stateNowB);

            timeNowB++;
        }
    }
}

const maxTime = Math.max(arrA.length, arrB.length);

while (arrA.length < maxTime) {
    arrA.push(arrA[arrA.length - 1]); // 마지막 위치 그대로 유지
}
while (arrB.length < maxTime) {
    arrB.push(arrB[arrB.length - 1]); // 마지막 위치 그대로 유지
}

let answer = 0;
for (let i = 1; i < maxTime; i++) {
    if (arrA[i - 1] !== arrB[i - 1] && arrA[i] === arrB[i]) {
        answer++
    }
}

console.log(answer)