const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

const doubleConsonants = (string) => {
  let strArray = string.split("").map((char) =>
    (CONSONANTS.includes(char.toLowerCase()) ? char + char : char));

  return strArray.join("");
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""