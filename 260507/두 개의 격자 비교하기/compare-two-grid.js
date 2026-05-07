const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

// N과 M을 각각 rows, cols로 정리
const [rows, cols] = input[0].split(' ').map(Number);


// N x M의 배열을 0으로 채워 만들기
let arr1 = Array(rows).fill(0).map(() => Array(cols).fill(0));
let arr2 = Array(rows).fill(0).map(() => Array(cols).fill(0));

// 첫 번째 배열에 입력 받은 값 넣기 
for (let i = 0; i < rows; i++) {
    arr1[i] = input[i+1].split(' ').map(Number);
}

// 두 번째 배열에 입력 받은 값 넣기 
for (let i = 0; i < rows; i++) {
    arr2[i] = input[i + rows + 1].split(' ').map(Number);
}

let arr3 = Array(rows).fill(0).map(() => Array(cols).fill(0));

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            arr3[i][j] = 0
        } else {
            arr3[i][j] = 1
        }
    }
}


for (let rows of arr3) {
    let str = "";
    for (let elem of rows) {
        str += elem + " ";
    }
    console.log(str);
}