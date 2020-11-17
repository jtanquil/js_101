const readline = require('readline-sync');
const SQMETER_TO_SQFT = 10.7639;

console.log("Select a unit for the input ('feet' or 'meters'):");
let unit = readline.prompt();

console.log("Enter the length of the room in meters:");
let length = Number(readline.prompt());

console.log("Enter the width of the room in meters:");
let width = Number(readline.prompt());

let area = length * width;
let convertedArea = unit === 'meters' ? area * SQMETER_TO_SQFT : area / SQMETER_TO_SQFT;
let convertedUnit = unit === 'meters' ? 'feet' : 'meters';

console.log(`The area of the room is ${area} square ${unit} (${convertedArea} square ${convertedUnit}).`);

