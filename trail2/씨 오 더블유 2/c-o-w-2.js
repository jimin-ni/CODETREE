const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];
let arr = string.trim().split('')

let ans = 0;
for (let i = 0; i < n; i++) { 
    if(arr[i]==='C'){
        for(let j = i+1; j <n;j++){
            if(arr[j]==='O'){
                for(let k = j+1; k<n; k++){
                    if(arr[k]==='W'){
                        ans++
                    }
                }
            }
        }
    }
}

console.log(ans)