const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';
let anotherCalculation = 'Y';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang = LANGUAGE) {
  return MESSAGES[lang][message];
}

prompt(messages('welcome'));

do {
  prompt(messages('firstNumber'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('numberError'));
    number1 = readline.question();
  }

  prompt(messages('secondNumber'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('numberError'));
    number2 = readline.question();
  }

  prompt(messages('operation'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('operationError'));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${messages('result')} ${output}`);

  prompt(messages('anotherCalculation'));
  anotherCalculation = readline.question();

  while (!['Y', 'N'].includes(anotherCalculation)) {
    prompt(messages('anotherCalcError'));
    anotherCalculation = readline.question();
  }
} while (anotherCalculation === 'Y');