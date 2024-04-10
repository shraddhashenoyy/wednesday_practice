//Convert Celsius into Fahrenheit

const prompt = require('prompt-sync')();

const celsius = parseInt(prompt("Enter a celsius value: "));
const fahrenheit=(celsius*1.8)+32;
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);