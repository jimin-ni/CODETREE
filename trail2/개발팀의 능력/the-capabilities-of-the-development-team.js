const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// 모든 팀원의 합
let allMenber = 0
for (let i = 0; i < 5; i++) {
    allMenber += abilities[i]
}

let answer = Infinity
let possible = false;

for (let i = 0; i < 5; i++) {
    for (let k = i + 1; k < 5; k++) {
        // 2명 팀 A 선정
        let teamA = abilities[i] + abilities[k]

        for (let m = 0; m < 5; m++) {
            for (let n = m + 1; n < 5; n++) {
                if (m === i || m === k || n === i || n === k) {
                    continue;
                }

                // 2명 팀 B 선정
                let teamB = abilities[m] + abilities[n]

                // 1명 팀 C 선정
                let teamC = allMenber - teamA - teamB

                // 각 팀끼리 동일한 능력치라면 진행 X
                if (teamA !== teamB && teamA !== teamC && teamB !== teamC) {
                    possible = true; // 유효한 조합 발견!

                    let maxTeam = Math.max(teamA, teamB, teamC);
                    let minTeam = Math.min(teamA, teamB, teamC);
                    answer = Math.min(answer, maxTeam - minTeam);
                }

            }
        }
    }
}

console.log(possible ? answer : -1);