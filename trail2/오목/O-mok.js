const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

// 4가지 방향: 오목판 기준 가로, 세로, 우하향 대각선, 우상향 대각선
const dx = [0, 1, 1, -1]; // i값
const dy = [1, 0, 1, 1]; // j값

//흰색이든 검정색이든 5알이 연속해 배치되었는지 확인하는 메소드
function winBattle(color) {
    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 19; j++) {
            if (arr[i][j] === color) { // 원하는 색상과 동일할 때

                for (let dir = 0; dir < 4; dir++) {
                    let count = 1;

                    // 현재 위치(i, j)에서 해당 방향으로 돌이 이어지는지 확인
                    for (let step = 1; step < 5; step++) {
                        let nx = i + dx[dir] * step
                        let ny = j + dy[dir] * step

                        // 바둑판 범위를 벗어나지 않고 같은 색이면 count 증가
                        if (nx >= 0 && nx < 19 && ny >= 0 && ny < 19 && arr[nx][ny] === color) {
                            count++
                        } else {
                            break
                        }
                    }

                    // 정확히 5개의 돌이 연속해 있다면
                    if (count === 5) {
                        // 연속된 5개 중 가운데 위치는 3번째 돌 (step = 2 일 때의 좌표)
                        // 문제에서 요구하는 좌표는 1부터 시작하므로 각각 +1
                        let centerX = i + dx[dir] * 2 + 1;
                        let centerY = j + dy[dir] * 2 + 1;

                        return { win: true, x: centerX, y: centerY };
                    }
                }

            }
            // 0, 또는 다른 색상의 돌이다 -> 아무 일 없음

        }
    }

    return { win: false }
}

// 검정돌 1
const blackResult = winBattle(1)

// 흰돌 2
const whiteResult = winBattle(2)


if (blackResult.win) { // 결과과 true라면
    console.log(1)
    console.log(`${blackResult.x} ${blackResult.y}`)
} else if (whiteResult.win) {
    console.log(2)
    console.log(`${whiteResult.x} ${whiteResult.y}`)
} else {
    console.log(0)
}