const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

//(x, y) 에 대해서 x +1, y+1 최소 이거인 위치로 이동.
// 시작점 $(0, 0)$ ➔ 지점 1 $(r_1, c_1)$ ➔ 지점 2 $(r_2, c_2)$ ➔ 도착점 $(R-1, C-1)$
// 색상 조건은
//   grid[0][0] != grid[r1][c1]
//  grid[r1][c1] != grid[r2][c2]
// grid[r2][c2] != grid[R-1][C-1]

let ans = 0;

for (let r1 = 1; r1 < R - 1; r1++) {
    for (let c1 = 1; c1 < C - 1; c1++) {

        for (let r2 = r1 + 1; r2 < R - 1; r2++) {
            for (let c2 = c1 + 1; c2 < C - 1; c2++) {
                if (grid[0][0] !== grid[r1][c1] &&
                    grid[r1][c1] !== grid[r2][c2] &&
                    grid[r2][c2] !== grid[R - 1][C - 1]) {
                    ans++;
                }
            }
        }
    }
}

console.log(ans)