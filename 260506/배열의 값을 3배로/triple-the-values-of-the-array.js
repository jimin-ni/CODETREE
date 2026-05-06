const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
        const num = input[i * 3 + j] * 3;

        row += num + (j === 2 ? "" : " ");
    }
    console.log(row);
}