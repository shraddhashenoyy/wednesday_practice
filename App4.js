//Calculating HCF and LCM

const prompt = require('prompt-sync')();
const num1=parseInt(prompt("Enter number1:  "));
const num2=parseInt(prompt("Enter number2:  "));
let hcf;
let lcm;

for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0  && num2%i==0){
        hcf=i;
    }
}

console.log(`The HCF of ${num1} and ${num2} is ${hcf}`);
lcm=(num1*num2)/hcf;
console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);
