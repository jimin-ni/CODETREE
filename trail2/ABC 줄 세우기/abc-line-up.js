const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ");

// 알파벳의 아스키코드 순서대로 정렬한다
// sort 사용 불가. 버블정렬 적용
let arrAsci = arr.map(char => char.charCodeAt(0));

let moveCount = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arrAsci[i] > arrAsci[j]) {
            //[arrAsci[i], arrAsci[j] = arrAsci[j], arrAsci[i]]
            moveCount++
        }
    }
}

console.log(moveCount)