const readline = require('readline-sync');
const isNumber = (input) =>
  !Number.isNaN(Number(input)) && input.trim() !== '';
const sum = (acc, ele) => acc + ele;
const product = (acc, ele) => acc * ele;

let arr = [];

while (true) {
  let num = readline.question("Please add a number to the array. Enter a non-numeric input to stop adding to the array. ");

  if (isNumber(num)) {
    arr.push(Number(num));
    console.log(arr);
  } else {
    break;
  }
}

let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ').trim().toLowerCase();

while (!['s', 'p'].includes(operation)) {
  operation = readline.question('Invalid input. Enter "s" to compute the sum, or "p" to compute the product.');
}

// the starting result depends on whether it's a sum or product of numbers
let result = operation === 's' ? arr.reduce(sum, 0) : arr.reduce(product, 1);

console.log(`The ${operation === 's' ? 'sum' : 'product'} of the array is ${result}.`)
