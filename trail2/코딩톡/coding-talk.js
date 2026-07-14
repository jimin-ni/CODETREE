const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// n 전체 사람 수
// m 전체 메시지 수
// p 확인할 메시지 번호
const [n, m, p] = input[0].split(' ').map(Number);

// 메시지 정보: 말한 사람 메시지 번호
const messages = input.slice(1, 1 + m).map(line => line.split(' '));

// 알파벳 대문자 아스키코드 65부터 시작 
const peopleName = Array.from({ length: n }, (value, index) => {
    return String.fromCharCode(65 + index);
});

// p번째 메시지를 읽은 사람 
// p번째 메시지를 보낸 사람
// p번째 이후에 메시지를 보낸 모든 사람들
// p번째 메시지와 "읽지 않은 사람 수(u)"가 같은 메시지를 보낸 사람
if (messages[p - 1][1] === '0') {
    console.log('')
    process.exit(0);
}

// 확실하게 읽은 사람 = p이후의 메시지를 보낸 사람 목록에서 제거
for (let i = p; i < m; i++) {
    for (let k = 0; k < n; k++) {
        if (messages[i][0] === peopleName[k]) {
            peopleName[k] = ''
        }
    }
}

//  p번째 메시지와 안 읽은 사람 수가 동일한 메시지를 보낸 사람도 읽은 사람 목록에서 제거
for (let i = 0; i < p; i++) {
    for (let k = 0; k < n; k++) {
        if (messages[i][1] === messages[p - 1][1]) {
            if (peopleName[k] === messages[i][0]) {
                peopleName[k] = ''
            }
        }
    }
}

console.log(peopleName.filter(name => name !== '').join(' '))