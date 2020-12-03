const isLowercase = (char) => 'a' <= char && char <= 'z';
const isUppercase = (char) => 'A' <= char && char <= 'Z';

const swapChar = (char) => {
  if (isLowercase(char)) {
    return char.toUpperCase();
  } else if (isUppercase(char)) {
    return char.toLowerCase();
  } else {
    return char;
  }
};

const swapCase = (str) => str.split("").map(swapChar).join("");

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"