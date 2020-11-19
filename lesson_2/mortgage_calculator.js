const readline = require('readline-sync');

const prompt = (message) => {
  console.log(`=> ${message}`);
};

const isDollarAmount = (number) =>
  !Number.isNaN(number) && number >= 0.01;
const isNonnegativeNumber = (number) =>
  !Number.isNaN(number) && number > 0;
const isPositiveInteger = (number) =>
  Number.isInteger(number) && number > 0;

const getMonthlyPayment = (loanAmount, annualPercentageRate, loanDuration) => {
  let monthlyRate = annualPercentageRate / (12 * 100);
  return loanAmount *
    (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
};

while (true) {
  prompt("Enter loan amount, in dollars:");
  let loanAmount = Number(readline.question());

  while (!isDollarAmount(loanAmount)) {
    prompt("Loan amount must be a positive dollar amount.");
    loanAmount = Number(readline.question());
  }

  prompt("Enter interest rate (5% = '5', 2.5% = '2.5'):");
  let annualPercentageRate = Number(readline.question());

  while (!isNonnegativeNumber(annualPercentageRate)) {
    prompt("Interest rate must be a nonnegative number.");
    annualPercentageRate = Number(readline.question());
  }

  prompt("Enter loan duration, in months.");
  let loanDuration = Number(readline.question());

  while (!isPositiveInteger(loanDuration)) {
    prompt("Loan duration must be a positive integer.");
    loanDuration = Number(readline.question());
  }

  let monthlyPayment =
    getMonthlyPayment(loanAmount, annualPercentageRate, loanDuration);

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}.`);

  prompt("Another calculation? (y/n)");
  let anotherCalculation = readline.question().trim().toLowerCase();

  while (!['y', 'n'].includes(anotherCalculation)) {
    prompt("Please input 'y' or 'n'.");
    anotherCalculation = readline.question().trim().toLowerCase();
  }

  if (anotherCalculation === 'n') {
    break;
  }
}