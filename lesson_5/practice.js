// 6. Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let age = Object.values(munsters).reduce((acc, ele) =>
  (ele.gender === 'male' ? acc + ele.age : acc), 0);

console.log(age);

// 7. Given this previously seen family object, print the name, age, and gender
// of each family member:

Object.keys(munsters).forEach((key) => {
  console.log(`${key} is a ${munsters[key]['age']}-year-old ${munsters[key]['gender']}.`);
});

// 8. Using the forEach method, write some code to output all vowels from the
// strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach((arr) => {
  arr.forEach((ele) => {
    ele.split("").forEach((char) => {
      if ("aeiou".includes(char)) {
        console.log(char);
      }
    });
  });
});

// 9. Given the following data structure, return a new array with the same
// structure, but with the subarrays ordered -- alphabetically or numerically
// as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let sortedArr = arr.map((subArr) =>
  subArr.slice().sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
);

console.log(sortedArr);

// 10. Perform the same transformation of sorting the subarrays we did in the
// previous exercise with one difference; sort the elements in descending order.

let descendingSortedArr = arr.map((subArr) =>
  subArr.slice().sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  })
);

console.log(descendingSortedArr);

// 11. Given the following data structure, use the map method to return a new
// array identical in structure to the original but, with each number
// incremented by 1. Do not modify the original data structure.

let arr2 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let incrementedArr = arr2.map((obj) => {
  let copy = Object.assign({}, obj);

  Object.keys(copy).forEach((key) => {
    copy[key] += 1;
  });

  return copy;
});

console.log(arr2);
console.log(incrementedArr);

// 12. Given the following data structure, use a combination of methods,
// including filter, to return a new array identical in structure to the
// original, but containing only the numbers that are multiples of 3.

let arr3 = [[2], [3, 5, 7], [9], [11, 15, 18]];
let filteredArr = arr3.map((subArr) =>
  subArr.filter((element) => element % 3 === 0));

console.log(filteredArr);

// 13. Given the following data structure, sort the array so that the
// sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr4 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let sumOdds = (array) => array.reduce((acc, ele) =>
  (ele % 2 === 1 ? acc + ele : acc), 0);

arr4.sort((a, b) => sumOdds(a) - sumOdds(b));

console.log(arr4);

// 14. Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables. The
// sizes should be uppercase, and the colors should be capitalized.

let obj2 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let capitalize = (string) => string[0].toUpperCase() + string.slice(1);

let produce = Object.values(obj2).map((food) => {
  switch (food.type) {
    case 'fruit':
      return food.colors.map((color) => capitalize(color));
    case 'vegetable':
      return food.size.toUpperCase();
  }
});

console.log(produce);

// 15. Given the following data structure, write some code to return an array
// which contains only the objects where all the numbers are even.

let arr5 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let filteredArr2 = arr5.filter((obj) =>
  Object.values(obj).every((array) =>
    array.every((ele) =>
      ele % 2 === 0)));

console.log(filteredArr2);

// 16. Given the following data structure, write some code that returns an
// object where the key is the first item in each subarray, and the value is
// the second.

let arr6 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj3 = {};

arr6.forEach((ele) => {
  obj3[ele[0]] = ele[1];
});

console.log(obj3);

// 17. Write a function that takes no parameters and returns a UUID.

const HEX_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let getHexValue = () => HEX_VALUES[Math.floor(Math.random() * 16)];
let getUUID = () => {
  let DASH_INDICES = [8, 13, 18, 23];
  let UUID_TOTAL_LENGTH = 36;
  let uuid = '';

  for (let index = 0; index < UUID_TOTAL_LENGTH; index += 1) {
    if (DASH_INDICES.includes(index)) {
      uuid += '-';
    } else {
      uuid += getHexValue();
    }
  }

  return uuid;
};

console.log(getUUID());