const fs = require('fs');
let inputStr = fs.readFileSync(0).toString().trim().split(' ')

let word_a = inputStr[0]
let word_b = inputStr[1]

if(word_a.length > word_b.length) {
    console.log(`${word_a} ${word_a.length}`)
} else if (word_a.length < word_b.length) {
    console.log(`${word_b} ${word_b.length}`)
} else {
    console.log('same')
}