const triangle = (sideOne, sideTwo, sideThree) => {
  let shortestSide = Math.min(sideOne, sideTwo, sideThree);
  if (shortestSide <= 0) return "invalid";

  let longestSide = Math.max(sideOne, sideTwo, sideThree);
  if (sideOne + sideTwo + sideThree <= 2 * longestSide) return "invalid";

  let sameLengthAsSideOne =
    [sideOne, sideTwo, sideThree].filter((ele) => ele === sideOne).length;

  if (sameLengthAsSideOne === 3) {
    return "equilateral";
  } else if (sameLengthAsSideOne === 2) {
    return "isosceles";
  } else if (sideTwo === sideThree) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"