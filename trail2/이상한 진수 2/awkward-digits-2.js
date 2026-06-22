const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

let aArr = String(a).split('').map(Number)
let maxNum = -1; // 최댓값을 저장할 변수
for (let i = 0; i < aArr.length; i++) {
    let tempArr = [...aArr];


    if (tempArr[i] === 0) {
        tempArr[i] = 1;
    } else {
        tempArr[i] = 0
    }

    let currentNum = 0;
    for (let j = 0; j < tempArr.length; j++) {
        currentNum = currentNum * 2 + tempArr[j]
    }

    if (currentNum > maxNum) {
        maxNum = currentNum
    }
}


console.log(maxNum)