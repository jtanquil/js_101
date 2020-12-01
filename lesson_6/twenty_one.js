const readline = require('readline-sync');

const CONSTANTS = require('./twenty_one_constants.json');
const PLAYING_CARDS = CONSTANTS.PLAYING_CARDS;
const INITIAL_HAND_SIZE = CONSTANTS.INITIAL_HAND_SIZE;
const CARD_VALUES = CONSTANTS.CARD_VALUES;
const ACE = CONSTANTS.ACE;
const MAX_HAND_SCORE = CONSTANTS.MAX_HAND_SCORE;
const MOVES = CONSTANTS.MOVES;
const MESSAGES = CONSTANTS.MESSAGES;
const DEALER_STAY_SCORE = CONSTANTS.DEALER_STAY_SCORE;

const prompt = (key) => {
  console.log(`=> ${MESSAGES.hasOwnProperty(key) ? MESSAGES[key] : key}`);
};

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const validateInput = (message, options) => {
  prompt(message);
  let response = readline.question().trim();

  while (!options.includes(response)) {
    prompt(`Invalid input, please try again. Options are: ${options.join(', ')}`);
    response = readline.question().trim();
  }

  return response;
};

const initializeDeck = () => {
  let deck = PLAYING_CARDS.slice();
  let outputArr = [];

  while (deck.length > 0) {
    let randomIndex = Math.floor(Math.random() * deck.length);

    outputArr.push(...deck.splice(randomIndex, 1));
  }

  return outputArr;
};

const initializeGame = () => ({
  deck: initializeDeck(),
  playerHand: [],
  dealerHand: [],
  playerScore: 0,
  dealerScore: 0
});

const drawCards = (deck, hand, draws = 1) => {
  for (let numDraws = 1; numDraws <= draws; numDraws += 1) {
    hand.push(deck.shift());
  }
};

const calculateHandValue = (hand) => {
  let nonAces = hand.filter((card) => card !== ACE);
  let nonAcesValue = nonAces.reduce((sum, card) => sum + CARD_VALUES[card], 0);
  let numberOfAces = hand.length - nonAces.length;

  if (numberOfAces === 0) {
    return nonAcesValue;
  } else {
    let maxAceValue = numberOfAces + 10;

    if (nonAcesValue + maxAceValue <= MAX_HAND_SCORE) {
      return nonAcesValue + maxAceValue;
    } else {
      return nonAcesValue + numberOfAces;
    }
  }
};

const updateHandValue = (game, player) => {
  game[`${player}Score`] = calculateHandValue(game[`${player}Hand`]);
};

const deal = (game) => {
  drawCards(game.deck, game.playerHand, INITIAL_HAND_SIZE);
  drawCards(game.deck, game.dealerHand, INITIAL_HAND_SIZE);
  updateHandValue(game, "player");
  updateHandValue(game, "dealer");
};

const busted = (handValue) => handValue > MAX_HAND_SCORE;

const displayHand = (player, game, revealHand = true) => {
  let playerHand = game[`${player}Hand`];
  let hand =
    revealHand ? playerHand.join(', ') : playerHand[0] + `, one unknown card`;
  // only display the hand's value if the entire hand is being revealed
  let value = revealHand ? ` (Value: ${game[`${player}Score`]})` : '';
  prompt(`${capitalize(player)}'s hand: ${hand}${value}`);
};

const playerTurn = (game) => {
  while (true) {
    let playerMove = validateInput("playerMove", MOVES);

    if (playerMove === 'stay') break;

    drawCards(game.deck, game.playerHand);
    updateHandValue(game, "player");
    prompt("playerHit");
    displayHand("player", game);

    if (busted(game.playerScore)) break;
  }

  if (!busted(game.playerScore)) {
    prompt("playerStay");
  }
};

const dealerTurn = (game) => {
  while (game.dealerScore < DEALER_STAY_SCORE) {
    prompt("dealerHit");
    drawCards(game.deck, game.dealerHand);
    updateHandValue(game, "dealer");
  }

  if (!busted(game.dealerScore)) {
    prompt("Dealer stays.");
  }
};

const detectGameWinner = (game) => {
  if (busted(game.playerScore)) {
    return "dealer";
  } else if (busted(game.dealerScore)) {
    return "player";
  } else if (game.dealerScore > game.playerScore) {
    return "dealer";
  } else if (game.playerScore > game.dealerScore) {
    return "player";
  } else {
    return null;
  }
};

const gameWinnerExists = (game) => !!detectGameWinner(game);

const displayResults = (game) => {
  displayHand("player", game);
  displayHand("dealer", game);

  if (gameWinnerExists(game)) {
    let gameWinner = detectGameWinner(game);
    prompt(`${capitalize(gameWinner)} wins!`);
  } else {
    prompt("tie");
  }
};

while (true) {
  console.clear();

  let game = initializeGame();
  deal(game);

  displayHand("player", game);
  displayHand("dealer", game, false);

  prompt("playerTurn");
  playerTurn(game);

  if (busted(game.playerScore)) {
    prompt("playerBust");
  } else {
    prompt("dealerTurn");
    dealerTurn(game);

    if (busted(game.dealerScore)) {
      prompt("dealerBust");
    }
  }

  displayResults(game);

  let anotherGame = validateInput("anotherGame", ["y", "n"]);
  if (anotherGame !== "y") break;
}

prompt("endProgram");