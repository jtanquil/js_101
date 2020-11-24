const swap = (string) => {
  let words = string.split(" ");

  return words.map((word) => {
    if (word.length === 1) {
      return word;
    } else {
      let firstLetter = word[0];
      let lastLetter = word[word.length - 1];
      let middle = word.slice(1, word.length - 1);

      return lastLetter + middle + firstLetter;
    }
  }).join(" ");
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"