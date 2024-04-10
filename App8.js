//Factorial of a number using recursion

const prompt=require('prompt-sync')();

function factorial(num){
    if(num==0){
        return 1;
    }else
    {
        return num*factorial(num-1);
    }
   
}

const x=parseInt(prompt("Enter the number: "));

if(x>=0){
const result=factorial(x);
console.log(`The factorial of ${x} is ${result}`);
}
else
{
   console.log("Enter a positive number");
}
    