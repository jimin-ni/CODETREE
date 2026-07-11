const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let x1List = [], x2List = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(' ').map(Number);
    x1List.push(x1);
    x2List.push(x2);
}

//arr[i].includes('plus')

let arr = new Array(105).fill(0)

// n개의 선분 확인
for (let i = 0; i < n; i++) {
    // 각 선분에 1 추가
    for (let k = x1List[i]; k <= x2List[i]; k++) {
        arr[k]++
    }
}

let ans = 'No'
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === (n - 1)) {
        ans = 'Yes'
        break;
    }
}

console.log(ans)