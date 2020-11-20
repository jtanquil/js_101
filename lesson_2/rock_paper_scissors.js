const readline = require('readline-sync');
const CONSTANTS = require('./rps_constants.json');

let wins = {
  user: 0,
  computer: 0
};

const prompt = (message) => {
  console.log(`=> ${message}`);
};

const printMatchResults = () => {
  prompt(`User wins: ${wins.user}`);
  prompt(`Computer wins: ${wins.computer}`);
};

const getGameWinner = (choice, computerChoice) => {
  if (CONSTANTS.WINNING_CHOICES[choice].includes(computerChoice)) {
    return 'User';
  } else if (CONSTANTS.WINNING_CHOICES[computerChoice].includes(choice)) {
    return 'Computer';
  } else {
    return 'tie';
  }
};

const getMatchWinner = () => {
  if (wins.user >= CONSTANTS.MAX_GAMES_WON) {
    return "User";
  } else if (wins.computer >= CONSTANTS.MAX_GAMES_WON) {
    return "Computer";
  } else {
    return null;
  }
};

const getUserInput = (inputPrompt, validInputs) => {
  prompt(inputPrompt);
  let userInput = readline.question().toLowerCase();

  while (!validInputs.includes(userInput)) {
    prompt("That's not a valid choice");
    userInput = readline.question().toLowerCase();
  }

  return userInput;
};

const getUserChoice = (choiceInput, abbreviations) =>
  (abbreviations.includes(choiceInput) ? CONSTANTS.ABBREVIATION_KEY[choiceInput]
    : choiceInput);

while (true) {
  printMatchResults();

  let abbreviations = Object.keys(CONSTANTS.ABBREVIATION_KEY);
  let userChoicePrompt = `Choose one: ${CONSTANTS.VALID_CHOICES.join(', ')} (${abbreviations.join('/')})`;
  let validInputs = CONSTANTS.VALID_CHOICES.concat(abbreviations);

  let userChoiceInput = getUserInput(userChoicePrompt, validInputs);
  let choice = getUserChoice(userChoiceInput, abbreviations);

  let randomIndex = Math.floor(Math.random() * CONSTANTS.VALID_CHOICES.length);
  let computerChoice = CONSTANTS.VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  let gameWinner = getGameWinner(choice, computerChoice);

  switch (gameWinner) {
    case 'tie':
      prompt('It was a tie!');
      break;
    default:
      prompt(`${gameWinner} won!`);
      wins[gameWinner.toLowerCase()] += 1;
  }

  printMatchResults();

  let matchWinner = getMatchWinner();

  if (matchWinner) {
    prompt(`The match is over! ${matchWinner} is the grand winner!`);
    wins.user = 0;
    wins.computer = 0;
  }

  let answer = getUserInput("Do you want to play again? (y/n)", ["y", "n"]);

  if (answer[0] === 'n') break;

  console.clear();
}