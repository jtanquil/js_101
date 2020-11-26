const multiplicativeAverage = (arr) => {
  if (arr.length === 0) {
    return "Input array contains no elements";
  } else {
    let product = arr.reduce((acc, ele) => acc * ele, 1) / arr.length;

    return product.toFixed(3);
  }
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"