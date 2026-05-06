const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

for (let i = 0; i < 3; i++) {
  let rowResult = ""; 

  for (let j = 0; j < 3; j++) {
    const index1 = i * 3 + j;
    const index2 = index1 + 9;
    const product = Number(input[index1]) * Number(input[index2]);

    rowResult += product;
    if (j < 2) {
      rowResult += " ";
    }
  }
  console.log(rowResult);
}
