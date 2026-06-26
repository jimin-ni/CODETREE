const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);

// 좌표값x, 8가지 방향 상, 하, 좌, 우, 우상, 우하, 좌상, 좌하
const dx = [-1, 1, 0, 0, -1, 1, -1, 1]; // i값
const dy = [0, 0, -1, 1, 1, 1, -1, -1]; // j값

let countLEE = 0;

// 전체 배열 순회
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

        if (arr[i][j] === 'L') { // 첫 번째 조건 L 해당여부 확인

            for (let dir = 0; dir < 8; dir++) { // 8가지 방향 확인

                // 두 번째 조건 E 해당하는지 확인
                let nx1 = i + dx[dir] * 1;
                let ny1 = j + dy[dir] * 1;

                // 세 번째 조건 E 해당하는지 확인
                let nx2 = i + dx[dir] * 2;
                let ny2 = j + dy[dir] * 2;

                // 두 번째, 세 번째 조건을 만족하는지 확인. true/false 가 변수에 담김
                const isFirstE = (nx1 >= 0 && nx1 < n && ny1 >= 0 && ny1 < m && arr[nx1][ny1] === 'E');
                const isSecondE = (nx2 >= 0 && nx2 < n && ny2 >= 0 && ny2 < m && arr[nx2][ny2] === 'E');

                // 두 개 다 만족, true면 lee 만족
                if (isFirstE && isSecondE) {
                    countLEE++
                }
            }

        }
    }
}

console.log(countLEE)