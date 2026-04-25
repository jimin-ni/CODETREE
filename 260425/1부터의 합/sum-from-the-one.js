const fs = require('fs');
let N = fs.readFileSync(0).toString().trim();
let a = 1

for ( i = 0; i <= 100; i++){
    a = a + 1
    if(a >= Number(N)) {
        console.log(i)
        break
    }
}