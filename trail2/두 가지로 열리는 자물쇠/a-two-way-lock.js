const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// 해당하는 조합
let count = 0;

// 두 숫자의 원형 거리가 2 이내인지 확인
function isClose(x, y) {
    const dist = Math.abs(x - y);
    // 직선 거리와 원형 반대편 거리 중 최솟값이 2 이하인지 확인
    return Math.min(dist, n - dist) <= 2;
}

// 1부터 n 중에 무작위로 3자리를 고르기
for (let a_n = 1; a_n <= n; a_n++) {
    //첫 번째 자리: a_n
    for (let b_n = 1; b_n <= n; b_n++) {
        //두 번째 자리: b_n
        for (let c_n = 1; c_n <= n; c_n++) {
            //세 번째 자리: c_n

            // 첫 번째 조합과 모든 자리에 대해 거리가 2 이내인가 
            const matchFirst = isClose(a_n, a) && isClose(b_n, b) && isClose(c_n, c);

            // 모든 자리에 대해 두 번째 조합과 거리가 2 이내인가          
            const matchSecond = isClose(a_n, a2) && isClose(b_n, b2) && isClose(c_n, c2);

            // 두 조합 중 하나라도 만족하면 카운트
            if (matchFirst || matchSecond) {
                count++;
            }
        }
    }
}

console.log(count)