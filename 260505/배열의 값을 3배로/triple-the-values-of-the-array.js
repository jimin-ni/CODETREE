const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

for (let i = 0; i < 3; i++) {
  const row = input.slice(i * 3, i * 3 + 3).map(num => num * 3);
  
  console.log(row.join(' '));
}
