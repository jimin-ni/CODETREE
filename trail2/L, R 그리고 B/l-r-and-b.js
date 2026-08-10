const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let L = null, R = null, B = null;

// 1. L, R, B의 위치 좌표(행, 열) 찾기
for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
            if (input[r][c] === 'L') L = [r, c];
                    if (input[r][c] === 'R') R = [r, c];
                            if (input[r][c] === 'B') B = [r, c];
                                }
                                }

                                // 2. 기본 맨해튼 거리 계산 (거쳐가는 . 의 개수이므로 -1)
                                let distance = Math.abs(L[0] - B[0]) + Math.abs(L[1] - B[1]) - 1;

                                // 3. 장애물 R이 L과 B 사이에 일직선으로 막고 있는지 검사
                                const isSameRow = (L[0] === R[0] && R[0] === B[0]);
                                const isSameCol = (L[1] === R[1] && R[1] === B[1]);

                                const rBetweenCols = (L[1] < R[1] && R[1] < B[1]) || (B[1] < R[1] && R[1] < L[1]);
                                const rBetweenRows = (L[0] < R[0] && R[0] < B[0]) || (B[0] < R[0] && R[0] < L[0]);

                                // 일직선으로 막혀있는 경우 2칸을 돌아가야 함
                                if ((isSameRow && rBetweenCols) || (isSameCol && rBetweenRows)) {
                                    distance += 2;
                                    }

                                    console.log(distance);
                                    