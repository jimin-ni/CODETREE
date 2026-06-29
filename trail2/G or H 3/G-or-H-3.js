const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}

let placed = Array(10001).fill(0)

for (const elem of people) {
  if (elem[1] === 'G') {
    placed[elem[0]] = 1
  } else if (elem[1] === 'H') {
    placed[elem[0]] = 2
  }
}

let maxNum = 0
for (let i = 0; i < placed.length - k; i++) {
  let sumNum = 0
  for (let j = i; j < i + k + 1 && j < placed.length; j++) {
    sumNum += placed[j]
  }
  maxNum = Math.max(maxNum, sumNum)
}

console.log(maxNum)