const fs = require('fs');

// 1. 입력 받아서 숫자로 변환 후 오름차순 정렬
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
nums.sort((a, b) => a - b);

// 2. 규칙에 따라 A, B, C 추출
const A = nums[0];
const B = nums[1];
const C = nums[nums.length - 1] - A - B;

// 3. 결과 출력
console.log(`${A} ${B} ${C}`);
