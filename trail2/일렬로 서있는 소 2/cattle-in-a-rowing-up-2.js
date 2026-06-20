const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);



let sumNum = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if ((Number(arr[i]) <= Number(arr[j])) && arr[j] <= Number(arr[k])) {
                //console.log(arr[i], arr[j], arr[k])
                sumNum = sumNum + 1
            }
        }
    }
}

console.log(sumNum);