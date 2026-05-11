const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();
let N = Number(input);

// 2차원 배열 생성
let array = Array.from(Array(N), () => []);

// 열 순서로 순회
for (let j = 0; j < N; j++) {
    // 홀수열과 짝수열 구분
    if (j % 2 == 0) {

        //짝수열 일 때
        for (let i = N - 1; i >= 0; i--) {
            array[i][j] = i + 1;
        }
    } else {
        // 홀수
        for (let i = 0; i < N; i++) {
            array[i][j] = N - i;
        }
    }
}

// 출력
for (let i = 0; i < N; i++) {
    let result = "";
    for (let j = 0; j < N; j++) {
        result += array[i][j] + "";
    }
    console.log(result);
}