const readline = require('readline-sync');

let now = new Date();
let currentYear = now.getFullYear();

let age = Number(readline.question("What is your age? "));
let retirementAge = Number(readline.question("At what age would you like to retire? "));

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.`);
console.log(`You only have ${retirementAge - age} years of work to go!`);

// Further discussion: if the new keyword wasn't used in line 3, then line 4
// would cause an error because the Date constructor has to be called with the
// new operator to create a new Date object; otherwise Date() would just return
// a string