// const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
// const staggeredCase = (str) => {
//   let alphabeticalCharacters = 0;

//   return str.split("").map((char) => {
//     if (ALPHABET.includes(char.toLowerCase())) {
//       alphabeticalCharacters += 1;

//       if (alphabeticalCharacters % 2 === 1) {
//         return char.toUpperCase();
//       } else {
//         return char.toLowerCase();
//       }
//     } else {
//       return char;
//     }
//   }).join("");
// };

// further exploration - toggle counting non-alphabetical characters
const countNonAlphabeticalsCallback = (char, index) =>
  (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase());

const staggeredCase = (str, countNonAlphabeticals = false) => {
  if (countNonAlphabeticals) {
    return str.split("").map(countNonAlphabeticalsCallback).join("");
  } else {
    let needUpper = true;

    return str.split("").map((char) => {
      if (char.toLowerCase() >= 'a' && char.toLowerCase <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    }).join("");
  }
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS", true) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", true) === "IgNoRe 77 ThE 444 nUmBeRs"
);