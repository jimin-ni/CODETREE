const fs = require('fs');
let inputNum = fs.readFileSync(0).toString().trim().split('\n');
let idx = 0;

while (true) {
    num = inputNum[idx];
    if (Number(num) < 25){
        console.log('Higher')
    }  else if (Number(num > 25)) {
        console.log('Lower')
    } else if (Number(num) == 25) {
        console.log('Good')
    }
    idx++;
}
