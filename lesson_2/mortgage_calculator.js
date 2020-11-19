const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');

const prompt = (key) => {
  console.log(`=> ${MESSAGES[key]}`);
};

const isDollarAmount = (number) =>
  !Number.isNaN(Number(number)) && Number(number) >= 0.01;
const isNonnegativeNumber = (number) =>
  !Number.isNaN(Number(number)) && number.trim() !== '' && Number(number) >= 0;
const isPositiveInteger = (number) =>
  Number.isInteger(Number(number)) && Number(number) > 0;
const isValidContinueInput = (input) => ['y', 'n'].includes(input.toLowerCase());

const getInput = (inputType, isValidInput) => {

  prompt(inputType);
  let input = readline.question();

  while (!isValidInput(input)) {
    prompt(inputType + "Invalid");
    input = readline.question();
  }

  return input;
};

const computeMonthlyPayment =
  (loanAmount, annualPercentageRate, loanDuration) => {
    if (annualPercentageRate === 0) {
      return loanAmount / loanDuration;
    } else {
      // divide annual rate by 12 to get monthly rate,
      // divide by 100 to get percent as a decimal
      let monthlyRate = annualPercentageRate / (12 * 100);
      return loanAmount *
        (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
    }
  };

while (true) {
  let loanAmount = Number(getInput("loanAmount", isDollarAmount));
  let annualPercentageRate = Number(getInput("annualPercentageRate", isNonnegativeNumber));
  let loanDuration = Number(getInput("loanDuration", isPositiveInteger));

  let monthlyPayment =
    computeMonthlyPayment(loanAmount, annualPercentageRate, loanDuration);

  console.log(`=> Your monthly payment is: $${monthlyPayment.toFixed(2)}.`);

  let anotherCalculation = getInput("anotherCalculation", isValidContinueInput).toLowerCase();

  if (anotherCalculation === 'n') {
    break;
  } else {
    console.clear();
  }
}