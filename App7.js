//Sum of Natural numbers using Recursion

const prompt=require('prompt-sync')();
function sum(a){
    if(a>0){
        return a+sum(a-1);
    }else
    {
        return a;
    }
}

const a=parseInt(prompt("Enter the integar: "));
const result =sum(a);

console.log(`The sum is ${result}`);
