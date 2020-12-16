const fibonacci = (nth) => {
  let firstRecursiveTerm = 1;
  let secondRecursiveTerm = 1;
  let currentTerm = 1;
  let count = 2;

  while (count < nth) {
    currentTerm = firstRecursiveTerm + secondRecursiveTerm;
    firstRecursiveTerm = secondRecursiveTerm;
    secondRecursiveTerm = currentTerm;

    count += 1;
  }

  return currentTerm;
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050