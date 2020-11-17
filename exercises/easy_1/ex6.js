const readline = require('readline-sync');
let int = Number.parseInt(readline.question('Please enter an integer greater than 0: '), 10);
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

// the starting result depends on whether it's a sum or product of numbers
let result = operation === 's' ? 0 : 1;

for (let i = 1; i <= int; i += 1) {
  switch (operation) {
    case 's':
      result += i;
      break;
    case 'p':
      result *= i;
      break;
  }
}

console.log(`The ${operation === 's' ? 'sum' : 'product'} of the integers between 1 and ${int} is ${result}.`)
