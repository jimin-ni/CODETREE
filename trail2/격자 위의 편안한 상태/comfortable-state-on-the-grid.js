const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

const grid = Array.from({ length: n }, () => Array(n).fill(0));

// 주어진 범위 정의 메소드
function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}
// 상하좌우 인접 4방향 이동을 위한 배열
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const result = [];
// M번의 색칠 명령 시행
for (let i = 0; i < m; i++) {
    // 1부터 시작하는 입력을 0부터 시작하는 인덱스로 보정
    const r = moves[i][0] - 1;
    const c = moves[i][1] - 1;

    // 현재 칸 색칠하기
    grid[r][c] = 1;

    // 인접한 4칸 중 색칠된 칸의 개수 세기
    let adjacentColoredCount = 0;

    for (let d = 0; d < 4; d++) {
        const nr = r + dx[d];
        const nc = c + dy[d];

        // 범위 내에 있고, 색칠된 칸(1)이라면 카운트 증가
        if (inRange(nr, nc) && grid[nr][nc] === 1) {
            adjacentColoredCount++;
        }
    }

    // 인접한 색칠된 칸이 정확히 3개면 '편안한 상태'(1), 아니면 (0)
    if (adjacentColoredCount === 3) {
        result.push(1);
    } else {
        result.push(0);
    }
}

// 각 줄마다 답을 한 번에 출력
console.log(result.join("\n"));