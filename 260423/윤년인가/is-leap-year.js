const fs = require("fs");
let inputNum = fs.readFileSync(0).toString().trim().split('\n');

let Y = Number(inputNum)

if (Y % 100 == 0 && Y %400 !=0) {
    console.log('false')
} else if ( Y%4 == 0 ) {
    console.log('true')
} else {
    console.log('false')
}