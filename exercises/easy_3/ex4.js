const findFibonacciIndexByLength = (int) => {
  let fibonacciArray = [1, 1];

  do {
    let nextFibonacci =
      fibonacciArray[fibonacciArray.length - 1] +
      fibonacciArray[fibonacciArray.length - 2];

    // a calculation error will only occur
    // if the fibonacci numbers exceed Number.MAX_SAFE_INTEGER
    if (nextFibonacci - fibonacciArray[fibonacciArray.length - 1] !==
      fibonacciArray[fibonacciArray.length - 2]) {
      console.log(`Calculation error when computing Fibonacci number ${fibonacciArray.length + 1}`);
    }
    fibonacciArray.push(nextFibonacci);
  } while (String(fibonacciArray[fibonacciArray.length - 1]).length < int);

  return fibonacciArray.length;
};

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
console.log(findFibonacciIndexByLength(20));

// Don't try any higher values until you read the solution Discussion

// Implementation notes:
// the length of an integer can be checked by checking its length as a string
// can also be done without an array:
// just update two integers fib1 and fib2 and an index, return index