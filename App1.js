//Prime number or not
const prompt = require('prompt-sync')();
const num=parseInt(prompt("Enter the number: "));
let flag = true;

if(num===1)
{
    console.log("This number is neither prime number nor composite number");
}else
if(num>1){
    for(i=2;i<num;i++)
    if(num%2==0){
        flag=false;
        break;
    }


if(flag){
    console.log(`${num} is prime-number`);
}else
{
    console.log(`${num} is not prime-number`);
   }
}

else{
    console.log("Not a prime-number");
}