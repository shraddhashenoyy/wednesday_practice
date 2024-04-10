//Fibonnaci series
const prompt = require('prompt-sync')();

const number=parseInt(prompt("Enter the integar: "));
let a=0,b=1,next_term;
console.log("Fibonnaci series: ");

for (let i = 1; i <= number; i++) {
    console.log(a);
    next_term = a + b;
    a = b;
    b = next_term;
}