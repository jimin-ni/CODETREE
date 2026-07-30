const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

// Please Write your code here.

// 1, 2, 3이 각각 가위(S), 바위(R), 보(P) 중 무엇인지 매핑 가능한 6가지 조합
const mappings = [
    [null, 'S', 'R', 'P'],
    [null, 'S', 'P', 'R'],
    [null, 'R', 'S', 'P'],
    [null, 'R', 'P', 'S'],
    [null, 'P', 'S', 'R'],
    [null, 'P', 'R', 'S']
];

// 첫 번째 개발자(choice1)가 이기는지 판단하는 함수
function p1Wins(choice1, choice2) {
    return (
        (choice1 === 'S' && choice2 === 'P') ||
        (choice1 === 'R' && choice2 === 'S') ||
        (choice1 === 'P' && choice2 === 'R')
    );
}

let maxWins = 0;

// 6가지 경우의 수를 전부 시뮬레이션
for (const map of mappings) {
    let currentWins = 0;

    for (const [a, b] of arr) {
        if (p1Wins(map[a], map[b])) {
            currentWins++;
        }
    }

    maxWins = Math.max(maxWins, currentWins);
}

console.log(maxWins);
