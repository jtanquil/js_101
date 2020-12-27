const MAX_FEATURED_NUMBER = 9876543201;
const MAX_FEATURED_ERROR = "There is no possible number that fulfills those requirements.";

const isFeatured = (possibleFeaturedNumber) => {
  if (possibleFeaturedNumber % 7 !== 0 || possibleFeaturedNumber % 2 === 0) {
    return false;
  } else {
    let digits = String(possibleFeaturedNumber).split("");
    let counts = {};

    for (let index = 0; index < digits.length; index += 1) {
      if (counts.hasOwnProperty(digits[index])) {
        return false;
      } else {
        counts[digits[index]] = true;
      }
    }

    return true;
  }
};

const featured = (number) => {
  let possibleFeaturedNumber = number + 1;

  while (possibleFeaturedNumber <= MAX_FEATURED_NUMBER) {
    if (isFeatured(possibleFeaturedNumber)) {
      return possibleFeaturedNumber;
    }

    possibleFeaturedNumber += 1;
  }

  return MAX_FEATURED_ERROR;
};

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."