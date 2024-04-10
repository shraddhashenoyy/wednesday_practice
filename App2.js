//prime-numbers in between the intervals

const prompt = require('prompt-sync')();
const a=parseInt(prompt("Enter the integar: "));
const b=parseInt(prompt("Enter the next integar: "));
console.log(`The prime-numbers from ${a} and ${b} are:  `);


for (let i = a; i <= b; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
if (i > 1 && flag == 0) {
        console.log(i);
    }
}