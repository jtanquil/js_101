const readline = require('readline-sync');

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

let madlib = `Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!\nThe ${adjective} ${noun} walks quickly over the lazy ${noun}.\nThe ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(madlib);