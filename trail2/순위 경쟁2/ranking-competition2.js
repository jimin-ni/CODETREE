const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const changes = input.slice(1).map(line => line.split(' '))

// 학생별 누적 점수 기록 
let scoreA = 0
let scoreB = 0

// 바로 직전까지 점수가 가장 높았던 사람
let lastTurnWinner = 'AB'

// 1등 변동 횟수
let count = 0

// 점수를 비교해서 더 높은 점수를 가진 쪽에 winner 이름 넣기
function whoIsWinner(scoreA, scoreB) {
    if (scoreA > scoreB) {
        return 'A'
    } else if (scoreA < scoreB) {
        return 'B'
    } else {
        return 'AB'
    }
}

for (let i = 0; i < n; i++) {
    let [name, chg] = changes[i]
    const value = Number(chg);

    if (name === 'A') {
        scoreA += value
    } else if (name === 'B') {
        scoreB += value
    }

    const currentWinner = whoIsWinner(scoreA, scoreB);

    if (currentWinner !== lastTurnWinner) {
        count++;
        lastTurnWinner = currentWinner;
    }
}

console.log(count)