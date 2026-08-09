const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);

// 중복을 제거하고 오름차순으로 정렬하여 '진짜' 두 번째로 작은 수 찾기
const uniqueSorted = [...new Set(a)].sort((x, y) => x - y);

if (uniqueSorted.length < 2) {
    console.log(-1);
    process.exit(0);
}

const secSmallest = uniqueSorted[1];

let count = 0;
let targetIndex = -1;

for (let i = 0; i < n; i++) {
    if (a[i] === secSmallest) {
        count++;
        targetIndex = i + 1; 
    }
}


if (count === 1) {
    console.log(targetIndex); 
} else {
    console.log(-1); 
}