const readline = require('readline-sync');

let bill = Number(readline.question("What is the bill? "));
let tipPercent = Number(readline.question("What is the tip percentage? "));

// assuming that tipPercent is a percent, out of 100%
let tipAmount = bill * (tipPercent/100);
let totalAmount = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`)
console.log(`The total is $${totalAmount.toFixed(2)}`);