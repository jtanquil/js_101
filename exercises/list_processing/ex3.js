const multiplyAllPairs = (arr1, arr2) => {
  let outputArr = [];

  for (let index1 = 0; index1 < arr1.length; index1 += 1) {
    for (let index2 = 0; index2 < arr2.length; index2 += 1) {
      outputArr.push(arr1[index1] * arr2[index2]);
    }
  }

  return outputArr.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
console.log((multiplyAllPairs([0, 0], [1, 2, 3, 4, 5]))); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]