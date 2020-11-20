const multiply = (num1, num2) => num1 * num2;
const square = (num) => multiply(num, num);
const power = (base, exponent) =>
  (exponent === 1 ? base : multiply(base, power(base, exponent - 1)));

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(power(3, 3) === 27); // logs true
console.log(power(-4, 5) === -1024); // logs true