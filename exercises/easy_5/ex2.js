const union = (arr1, arr2) => {
  let arr = [];

  [arr1, arr2].forEach((array) => {
    array.forEach((ele) => {
      if (!arr.includes(ele)) {
        arr.push(ele);
      }
    });
  });

  return arr;
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
