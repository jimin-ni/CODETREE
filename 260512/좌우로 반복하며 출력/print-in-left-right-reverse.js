const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let N = Number(input);

for (let i = 0; i < N; i++) {
    let array = [];

    for (let j = 1; j < N + 1; j++) {
        array.push(j)
    }

    if (i % 2 !== 0) {
        array.reverse()
    }
    console.log(array.join(''))
}