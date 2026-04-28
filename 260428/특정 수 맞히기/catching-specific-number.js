const fs = require('fs');
let inputNum = fs.readFileSync(0).toString().trim().split('\n');
let idx = 0;

while (true) {
    num = Number(inputNum[idx]);

    if (num < 25){
        console.log('Higher')
    }  else if (num > 25) {
        console.log('Lower')
    } else if (num == 25) {
        console.log('Good')
        break;
    }
    idx++;
}