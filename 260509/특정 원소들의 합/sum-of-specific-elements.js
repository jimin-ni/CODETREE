const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);
let matrix = [];
let total = 0;

for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
        row.push(Number(input[i * 4 + j]));
    }
    matrix.push(row)
}

total = matrix[0][0] + matrix[1][0] + matrix[1][1] + matrix[2][0] + matrix[2][1] + matrix[2][2] + matrix[3][0] + matrix[3][1] + matrix[3][2] + matrix[3][3] 

console.log(total)