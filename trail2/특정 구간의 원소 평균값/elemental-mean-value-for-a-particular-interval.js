const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
let ans = 0


for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    
    let sumNum = 0;
    const count = j - i + 1; 
    
    for (let k = i; k <= j; k++) {
      sumNum += arr[k];
    }
    
    const avg = sumNum / count; 
    
    let exists = false;
    for (let k = i; k <= j; k++) {
      if (arr[k] === avg) {
        exists = true;
        break; 
      }
    }
    
    if (exists) {
      ans++;
    }
  }
}

console.log(ans);