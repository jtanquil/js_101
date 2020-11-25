const interleave = (arr1, arr2) => {
  let arr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    arr.push(arr1[index], arr2[index]);
  }

  // arr1.forEach((ele, index) => {
  //   arr.push(ele, arr2[index]);
  // });

  // return arr1.reduce((acc, ele, index) => acc.concat(ele, arr2[index]), []);

  return arr;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
