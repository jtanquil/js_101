const readline = require('readline-sync');

const CONSTANTS = require('./twenty_one_constants.json');

const prompt = (key) => {
  console.log(`=> ${CONSTANTS.MESSAGES.hasOwnProperty(key) ? CONSTANTS.MESSAGES[key] : key}`);
};

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const validateInput = (message, options) => {
  prompt(message);
  // responses are treated as case-insensitive
  let response = readline.question().toLowerCase().trim();

  while (!options.includes(response)) {
    prompt(`Invalid input, please try again. Options are: ${options.join(', ')}`);
    response = readline.question().trim();
  }

  return response;
};

const createDeck = () => {
  let deck = [];

  CONSTANTS.PLAYING_CARDS_VALUES.forEach((value) => {
    Object.keys(CONSTANTS.PLAYING_CARDS_SUITS).forEach((suit) => {
      deck.push({
        value: value,
        suit: suit
      });
    });
  });

  return deck;
};

const initializeDeck = () => {
  let deck = createDeck();
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
  let nonAces = hand.filter((card) => card.value !== CONSTANTS.ACE);
  let nonAcesValue =
    nonAces.reduce((sum, card) => sum + CONSTANTS.CARD_VALUES[card.value], 0);
  let numberOfAces = hand.length - nonAces.length;

  if (numberOfAces === 0) {
    return nonAcesValue;
  } else {
    // either 1 ace will be worth 11 points and the rest worth 1, or every ace
    // will be worth 1 point
    let maxAceValue = numberOfAces + 10;

    if (nonAcesValue + maxAceValue <= CONSTANTS.MAX_HAND_SCORE) {
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
  drawCards(game.deck, game.playerHand, CONSTANTS.INITIAL_HAND_SIZE);
  drawCards(game.deck, game.dealerHand, CONSTANTS.INITIAL_HAND_SIZE);
  updateHandValue(game, "player");
  updateHandValue(game, "dealer");
};

const cardString = (card) =>
  `${card.value} of ${CONSTANTS.PLAYING_CARDS_SUITS[card.suit]}`;

const busted = (handValue) => handValue > CONSTANTS.MAX_HAND_SCORE;

const displayHand = (player, game, revealHand = true) => {
  let playerHand = game[`${player}Hand`].map(cardString);
  let hand =
    revealHand ? playerHand.join(', ') : playerHand[0] + `, one unknown card`;
  // only display the hand's value if the entire hand is being revealed
  let value = revealHand ? ` (Value: ${game[`${player}Score`]})` : '';
  prompt(`${capitalize(player)}'s hand: ${hand}${value}`);
};

const playerTurn = (game) => {
  while (true) {
    let playerMove = validateInput("playerMove", CONSTANTS.MOVES);

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
  while (game.dealerScore < CONSTANTS.DEALER_STAY_SCORE) {
    prompt("dealerHit");
    drawCards(game.deck, game.dealerHand);
    updateHandValue(game, "dealer");
  }

  if (!busted(game.dealerScore)) {
    prompt("dealerStay");
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

const displayGameResults = (game) => {
  displayHand("player", game);
  displayHand("dealer", game);

  if (gameWinnerExists(game)) {
    let gameWinner = detectGameWinner(game);
    prompt(`${capitalize(gameWinner)} wins!`);
  } else {
    prompt("tie");
  }
};

const updateMatchResults = (game, matchResults) => {
  if (gameWinnerExists(game)) {
    matchResults[`${detectGameWinner(game)}`] += 1;
  }
};

const resetMatch = (matchResults) => {
  matchResults.player = 0;
  matchResults.dealer = 0;
};

const detectMatchWinner = (matchResults) => {
  if (matchResults.player >= CONSTANTS.GAME_WINS_TO_WIN_MATCH) {
    return "player";
  } else if (matchResults.dealer >= CONSTANTS.GAME_WINS_TO_WIN_MATCH) {
    return "dealer";
  } else {
    return null;
  }
};

const matchWinnerExists = (matchResults) => !!detectMatchWinner(matchResults);

const displayMatchResults = (matchResults) => {
  if (matchWinnerExists(matchResults)) {
    prompt(`${capitalize(detectMatchWinner(matchResults))} won the match!`);
  } else {
    prompt(`First to win ${CONSTANTS.GAME_WINS_TO_WIN_MATCH} games wins the match.`);
  }

  prompt(`Player wins: ${matchResults.player}`);
  prompt(`Dealer wins: ${matchResults.dealer}`);
};

const displayRules = () => {
  prompt("welcome");
  prompt("howToPlay1");
  prompt("howToPlay2");
  prompt("howToPlay3");
  prompt("howToPlay4");
  prompt("howToPlay5");
  prompt("cardValues1");
  prompt("cardValues2");
};

let matchResults = {
  player: 0,
  dealer: 0
};

displayRules();

while (true) {
  resetMatch(matchResults);

  while (true) {
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

    displayGameResults(game);

    updateMatchResults(game, matchResults);
    displayMatchResults(matchResults);

    if (matchWinnerExists(matchResults)) break;

    let anotherGame = validateInput("anotherGame", CONSTANTS.YES_OR_NO_OPTIONS);
    if (anotherGame !== "y") break;

    console.clear();
  }

  let anotherMatch = validateInput("anotherMatch", CONSTANTS.YES_OR_NO_OPTIONS);
  if (anotherMatch !== "y") break;
}

prompt("endProgram");