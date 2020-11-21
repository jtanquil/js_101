const stringToInteger = (str) => {
  let chars = str.split("");
  let maxExponent = chars.length - 1;

  return chars.reduce((accumulator, element, index) =>
    accumulator + (element * (10 ** (maxExponent - index))), 0);
};

const stringToSignedInteger = (str) => {
  let sign = str[0];

  switch (sign) {
    case "+":
      return stringToInteger(str.slice(1));
    case "-":
      return -stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true