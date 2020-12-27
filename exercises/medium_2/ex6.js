const sumSquareDifference = (count) => {
  let sumOfSquares = 0;
  let squareOfSum = 0;

  for (let loopCounter = 1; loopCounter <= count;  loopCounter += 1) {
    sumOfSquares += loopCounter ** 2;
    squareOfSum += loopCounter;
  }

  return (squareOfSum ** 2) - sumOfSquares;
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150