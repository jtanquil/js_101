const penultimate = (str) => {
  let words = str.trim().split(" ");

  return words[words.length - 2];
};

const middleWord = (words) => {
  let wordsArray = words.trim().split(" ");

  // a sentence only has a middle word if it has an odd number of words
  if (wordsArray.length % 2 === 1) {
    return wordsArray[Math.floor(wordsArray.length / 2)];
  } else {
    return '';
  }
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(middleWord("one two three four five") === "three"); // logs true
console.log(middleWord("one two") === ""); // logs true
console.log(middleWord("") === ""); // logs true