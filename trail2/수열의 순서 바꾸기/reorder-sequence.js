const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input[1].trim().split(' ').map(Number);


let move = 0
for (let i = n-2; i >= 0; i--) {
    if(blocks[i] > blocks[i+1]){
        move = i + 1
        break;
    }
}

console.log(move)