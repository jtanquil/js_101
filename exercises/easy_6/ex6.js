const sequence = (int) => {
  let arr = [];

  for (let index = 1; index <= int; index += 1) {
    arr.push(index);
  }

  return arr;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]