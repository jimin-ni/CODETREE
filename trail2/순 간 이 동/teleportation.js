const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, x, y] = input[0].split(' ').map(Number);

// Please Write your code here.
let lengthA = Infinity
let lengthB = Infinity
let lengthC = Infinity
let ans=0

   lengthA = Math.abs(x - a)
   lengthA += Math.abs(b - y)

   lengthB = Math.abs(y-a)
   lengthB += Math.abs(b - x)

lengthC = Math.abs(b-a)

ans = Math.min(lengthA, lengthB, lengthC)

console.log(ans)