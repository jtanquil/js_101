// Further Exploration: balance square brackets [] and curly brackets {}
const isBalanced = (string) => {
  let parenthesisCounter = 0;
  let squareBracketCounter = 0;
  let curlyBracketCounter = 0;

  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '(':
        parenthesisCounter += 1;
        break;
      case ')':
        parenthesisCounter -= 1;
        break;
      case '[':
        squareBracketCounter += 1;
        break;
      case ']':
        squareBracketCounter -= 1;
        break;
      case '{':
        curlyBracketCounter += 1;
        break;
      case '}':
        curlyBracketCounter -= 1;
        break;
    }

    if (Math.min(parenthesisCounter, squareBracketCounter, curlyBracketCounter) < 0) {
      return false;
    }
  }

  return Math.max(parenthesisCounter, squareBracketCounter, curlyBracketCounter) === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced('') === true);