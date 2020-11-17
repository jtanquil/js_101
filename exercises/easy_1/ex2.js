const readline = require('readline-sync');
const printOdds = (bound) => {
  let counter = 1;

  do {
    console.log(counter);
    counter += 2;
  } while (counter < bound + 1)
}

let bound = Number(readline.question("Input an upper bound for odd numbers: "));

printOdds(bound);
