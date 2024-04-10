//convert kilometers into meters

const prompt=require('prompt-sync')();
const kilometer=parseInt(prompt("Enter the value in kilometer: "));
const factor = 0.623;
const miles = kilometer*factor;
console.log(`${kilometer} kilometers is equal to ${miles} miles`);