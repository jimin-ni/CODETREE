const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const x = Number(input[0]);

function solve(X) {
  let v = 1;
  while (v * v <= X) {
    v++;
  }
  v--;

  const remaining = X - v * v;

  if (remaining === 0) {
    return 2 * v - 1;
  } else if (remaining <= v) {
    return 2 * v;
  } else {
    return 2 * v + 1;
  }
}

console.log(solve(x));