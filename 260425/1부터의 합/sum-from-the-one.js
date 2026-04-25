const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let sum = 0;

for ( i = 1; i <= 100; i++){
    sum = sum + i;
    if(sum >= Number(N)) {
        console.log(i);
        break;
    }
}