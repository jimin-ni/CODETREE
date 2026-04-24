const fs = require('fs');
let n = fs.readFileSync(0).toString().trim();
let N = Number(n);
let arr = []

for(i = N; i <= 100; i++) {
    if(i >= 90){
        arr[i] = 'A'
    } else if (N >= 80){
        arr[i] = 'B'
    } else if (N >= 70) {
        arr[i] = 'C'
    } else if (N >= 60) {
        arr[i] = 'D'
    } else {
        arr[i] = 'F'
    }
    N = N + 1
}
let filterArr = arr.filter(v => v)
console.log(filterArr.join(' '))