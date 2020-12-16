let fibonacciNumbers = [1, 1];

const fibonacci = (nth) => {
  if (fibonacciNumbers[nth - 1]) {
    return fibonacciNumbers[nth - 1];
  } else {
    let firstRecursiveTerm =
    fibonacciNumbers[nth - 2] ? fibonacciNumbers[nth - 2] : fibonacci(nth - 1);
    let secondRecursiveTerm =
    fibonacciNumbers[nth - 3] ? fibonacciNumbers[nth - 3] : fibonacci(nth - 2);
    let newValue = firstRecursiveTerm + secondRecursiveTerm;

    fibonacciNumbers.push(newValue);

    return newValue;
  }
};

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765