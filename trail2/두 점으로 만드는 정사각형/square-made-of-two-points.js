const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);


let xMin = Math.min(x1, x2, a1, a2)
let xMax = Math.max(x1, x2, a1, a2)
let x = xMax - xMin

let yMin = Math.min(y1, y2, b1, b2)
let yMax = Math.max(y1, y2, b1, b2)
let y = yMax - yMin

let length = Math.max(x, y)


console.log(Math.abs(length * length ))