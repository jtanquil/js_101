const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

// the board is a 3x3 nested object, where the subobjects are rows and
// board[0][0] is the top left square
const initializeBoard = () => {
  let board = {};

  for (let row = 0; row < 3; row += 1) {
    board[row] = {
      0: INITIAL_MARKER,
      1: INITIAL_MARKER,
      2: INITIAL_MARKER
    };
  }

  return board;
};

const prompt = (message) => {
  console.log(`=> ${message}`);
};

const displayBoard = (board) => {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}`);
  console.log('     |     |');
  console.log('');
};

const getEmptySquares = (board) =>
  Object.keys(board).map(
    (row) => Object.keys(board[row]).filter(
      (key) => board[row][key] === INITIAL_MARKER));

const playerChoosesSquare = (board) => {
  let rowNum;
  let colNum;
  let emptySquares = getEmptySquares(board);

  while (true) {
    prompt("Input a row (top to bottom: 0, 1, 2): ");
    rowNum = readline.question();
    prompt("Input a column (left to right: 0, 1, 2): ");
    colNum = readline.question();

    if (emptySquares[rowNum] && emptySquares[rowNum].includes(colNum)) break;

    prompt("Invalid row/column combination, please try again.");
  }

  board[rowNum][colNum] = HUMAN_MARKER;
};

const computerChooseSquare = (board) => {
  let rowNum;
  let colNum;
  let emptySquares = getEmptySquares(board);

  do {
    rowNum = Math.floor(Math.random() * 3);
    colNum = String(Math.floor(Math.random() * 3));
  } while (!emptySquares[rowNum].includes(colNum));

  board[rowNum][colNum] = COMPUTER_MARKER;
};

const boardFull = (board) =>
  getEmptySquares(board).every((row) => row.length === 0);

const checkRowWinner = (board, marker) =>
  Object.values(board).some(
    (row) => Object.values(row).every(
      (char) => char === marker));

const checkCol = (board, marker, column) =>
  Object.values(board).every((row) => row[column] === marker);

const checkColWinner = (board, marker) =>
  checkCol(board, marker, 0) ||
  checkCol(board, marker, 1) ||
  checkCol(board, marker, 2);

const checkDiagonalWinner = (board, marker) =>
  [board[0][0], board[1][1], board[2][2]].every((ele) => ele === marker) ||
  [board[0][2], board[1][1], board[2][0]].every((ele) => ele === marker);

const detectWinner = (board) => {
  if (
    checkRowWinner(board, HUMAN_MARKER) ||
    checkColWinner(board, HUMAN_MARKER) ||
    checkDiagonalWinner(board, HUMAN_MARKER)
  ) {
    return "Player";
  } else if (
    checkRowWinner(board, COMPUTER_MARKER) ||
    checkColWinner(board, COMPUTER_MARKER) ||
    checkDiagonalWinner(board, COMPUTER_MARKER)
  ) {
    return "Computer";
  }

  return null;
};

const someoneWon = (board) => !!detectWinner(board);

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChooseSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt("Play again? (y or n)");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt("Thanks for playing Tic Tac Toe!");