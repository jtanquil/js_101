const HEX_CONVERSIONS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};

const stringToInteger = (str) => {
  let chars = str.split("");
  let maxExponent = chars.length - 1;

  return chars.reduce((accumulator, element, index) =>
    accumulator + (element * (10 ** (maxExponent - index))), 0);
};

const hexadecimalToInteger = (str) => {
  let chars = str.split("");
  let maxExponent = chars.length - 1;

  return chars.reduce((accumulator, element, idx) =>
    accumulator + (HEX_CONVERSIONS[element.toUpperCase()]
    * (16 ** (maxExponent - idx))), 0);
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('4D9f') === 19871); // logs true

