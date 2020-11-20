const stringToInteger = (str) => {
  let chars = str.split("");
  let maxExponent = chars.length - 1;

  return chars.reduce((accumulator, element, index) =>
    accumulator + (element * (10 ** (maxExponent - index))), 0);
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true