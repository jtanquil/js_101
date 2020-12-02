const NUMBER_STRINGS = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};

const englishWordSort = (a, b) => {
  if (NUMBER_STRINGS[a] < NUMBER_STRINGS[b]) {
    return -1;
  } else if (NUMBER_STRINGS[a] > NUMBER_STRINGS[b]) {
    return 1;
  } else {
    return 0;
  }
};

const alphabeticNumberSort = (arr) => arr.slice().sort(englishWordSort);

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(alphabeticNumberSort([1, 2, 3, 4, 4])); // [4, 4, 1, 3, 2])