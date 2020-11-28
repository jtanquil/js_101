const centerOf = (str) => {
  let middle = Math.floor(str.length / 2);

  return str.length % 2 === 1 ? str[middle] : str.slice(middle - 1, middle + 1);
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"