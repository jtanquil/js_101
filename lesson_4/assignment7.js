// In this example, we want to select the key-value pairs where the value is
// 'Fruit'. How would you implement this function?

const selectFruit = (produce) => {
  let fruits = {};
  let keys = Object.keys(produce);

  for (let index = 0; index < keys.length; index += 1) {
    let food = keys[index];

    if (produce[food] === 'Fruit') {
      fruits[food] = produce[food];
    }
  }

  return fruits;
};

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// If we wanted to, we could've decided that mutating the function argument
// is the right approach. Can you implement a doubleNumbers function that
// mutates its argument?

const doubleNumbers = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] *= 2;
  }

  return numbers;
};

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

// Here's an exercise for you: suppose we wanted to transform the numbers
// based on their position in the array rather than their value? Try coding
// a solution that doubles the numbers that have odd indices:

const doubleOddIndices = (numbers) => {
  let transformedNumbers = [];

  for (let index = 0; index < numbers.length; index += 1) {
    let currentNumber = numbers[index];

    if (index % 2 === 1) {
      transformedNumbers.push(2 * currentNumber);
    } else {
      transformedNumbers.push(currentNumber);
    }
  }

  return transformedNumbers;
};

let newNumbers = [1, 2, 3, 4, 5, 6];
console.log(doubleOddIndices(newNumbers)); // => [1, 4, 3, 8, 5, 12]
console.log(newNumbers); // => [1, 2, 3, 4, 5, 6]

// Try coding a function that lets you multiply every array item by a
// specified value:

const multiply = (numbers, multiplyBy) => {
  let multipliedNumbers = [];

  for (let index = 0; index < numbers.length; index += 1) {
    multipliedNumbers.push(numbers[index] * multiplyBy);
  }

  return multipliedNumbers;
};

myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
