const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let x = 0, y = 0
const dx = [1, 0, -1, 0]
const dy = [0, -1, 0, 1]
let dirNum = 3

for (let i = 0; i < input.length; i++) {
  const command = input[i];


  if (command === "L") {
    // -1이나 +3이나 동일
    dirNum = (dirNum + 3) % 4;

  } else if (command === 'R') {
    dirNum = (dirNum + 1) % 4;

  } else if (command === 'F') {
    x += dx[dirNum];
    y += dy[dirNum];

  }
}

console.log(x, y);