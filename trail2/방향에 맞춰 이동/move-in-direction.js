const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);
let wayNowX = 0
let wayNowY = 0


for (let i = 0; i < n; i++) {
  const [way, time] = moves[i].split(' ')
  if (way === 'W') {
    wayNowX = wayNowX - Number(time)
  } else if (way === 'S') {
    wayNowY = wayNowY - Number(time)
  } else if (way === 'N') {
    wayNowY = wayNowY + Number(time)
  } else {
    wayNowX = wayNowX + Number(time)
  }
}

console.log(`${wayNowX} ${wayNowY}`)