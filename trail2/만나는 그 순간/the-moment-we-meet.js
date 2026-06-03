const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

let arrA = new Array(1000005).fill(0)
let timeA = 0;
let posA = 0;

for (let i = 0; i < movesA.length; i++) {
    const [dir, t] = movesA[i];
    for (let j = 0; j < t; j++) {
        timeA++;
        if (dir === 'L') {
            posA--;
        } else {
            posA++;
        }
        arrA[timeA] = posA
    }
}

let arrB = new Array(1000005).fill(0)
let timeB = 0;
let posB = 0;

for (let i = 0; i < movesB.length; i++) {
    const [dir, t] = movesB[i];
    for (let j = 0; j < t; j++) {
        timeB++;
        if (dir === 'L') {
            posB--;
        } else {
            posB++;
        }
        arrB[timeB] = posB
    }
}

let answer = -1

for (let i = 1; i <= timeA; i++) {
    if (arrA[i] === arrB[i]) {
        answer = i;
        break;
    }
}

console.log(answer)