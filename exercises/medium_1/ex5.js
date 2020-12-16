const NUMBER_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

const wordToDigit = (input) => {
  let outputString = input.slice();

  // further exploration: to replace the loop,
  // 1) replace the regex with one that matches every number word
  // 2) pass a function to String.prototype.replace that returns the right digit
  let regex = new RegExp(Object.keys(NUMBER_WORDS).join("|"), "g");

  return outputString.replace(regex, (match) => NUMBER_WORDS[match]);

  // Object.keys(NUMBER_WORDS).forEach((numberWord) => {
  //   let regex = new RegExp(numberWord, 'g');

  //   outputString = outputString.replace(regex, NUMBER_WORDS[numberWord]);
  // });

  // return outputString;
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."