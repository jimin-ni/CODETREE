const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let x = Number(input[0]);

let time = 0
let currunt_v = 1

while (x > 0) {
  x = x - currunt_v
  time = time + 1

  if (x <= 0) {
    break;
  }

  x = x - currunt_v
  time = time + 1

  currunt_v = currunt_v + 1
}

console.log(time)