const reverseSentence = (str) => str.split(" ").reverse().join(" ");

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// buggy solution:
// function reverseSentence(string) {
//   return string.split('').reverse.join('');
// }
// since the input is split using '' as a delimiter, the returned array
// contains the characters of string in sequential order, so the return value
// of the whole function is the string reversed character-by-character instead
// of word-by-word