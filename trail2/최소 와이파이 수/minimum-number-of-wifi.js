const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

//        x: 1, 2, 3, 4, 5, ... n
//     사람: 1, 1, 0, 0, 1, ... 1
// 와이파이:  ,  , *,  ,  , ... *   -> 거리 m 이내의 사람들까지 사용 가능 

// 와이파이 수
let wifi = 0

for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
        wifi++;

        // wifi 설치 위치 pos
        let pos = i + m
        for (let k = pos - m; k <= pos + m; k++) {
            if (k >= 0 && k <= n) { // k가 주어진 범위 (1~n)
                arr[k] = 0;
            }
        }
    }
}

console.log(wifi)