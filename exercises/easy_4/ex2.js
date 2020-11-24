const readline = require('readline-sync');

let nums = [];

nums.push(Number(readline.question("Enter the 1st number: ")));
nums.push(Number(readline.question("Enter the 2nd number: ")));
nums.push(Number(readline.question("Enter the 3rd number: ")));
nums.push(Number(readline.question("Ehter the 4th number: ")));
nums.push(Number(readline.question("Enter the 5th number: ")));

let lastNum = Number(readline.question("Enter the last number: "));

console.log(`A number greater than ${lastNum} ${nums.some(num => num > lastNum) ? "appears" : "does not appear"} in ${nums}.`);