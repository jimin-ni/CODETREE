const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);
let matrix = [];
let total = 0;

for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(Number(input[i*4 + j]));
    }
    matrix.push(row);
}

for (let i = 0; i<4; i++) {
    for (let j = 0; j<4;j++){
        if(matrix[i][j] % 5 == 0) {
            total += 1;
        }   
    }
}

console.log(total)