const VOWELS = 'aeiou';

const stripVowels = (string) =>
  string.split("").filter((char) => !VOWELS.includes(char.toLowerCase())).join("");

const removeVowels = (array) => array.map(stripVowels);

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]