const runningTotal = (array) => {
  let outputArray = [];
  let runningSum = 0;

  for (let index = 0; index < array.length; index += 1) {
    runningSum += array[index];
    outputArray.push(runningSum);
  }

  return outputArray;
};

// Further discussion
const runningTotalMap = (array) => array.map((_, index) =>
  array.slice(0, index + 1).reduce((acc, ele) => acc + ele, 0));

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalMap([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotalMap([]));                     // []