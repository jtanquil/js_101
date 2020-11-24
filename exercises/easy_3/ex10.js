const TH_ONES_DIGITS = [0, 4, 5, 6, 7, 8, 9];
const TH_TENS_DIGITS = [11, 12, 13];
const endsInTh = (number) => {
  return TH_ONES_DIGITS.includes(number % 10) ||
     TH_TENS_DIGITS.includes(number % 100);
};

const getSuffix = (number) => {
  if (endsInTh(number)) {
    return "th";
  } else if (number % 10 === 1) {
    return "st";
  } else if (number % 10 === 2) {
    return "nd";
  } else {
    return "rd";
  }
};

const century = (year) => {
  let centuryNumber = parseInt((year - 1) / 100, 10) + 1;

  return centuryNumber + getSuffix(centuryNumber);
};

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"