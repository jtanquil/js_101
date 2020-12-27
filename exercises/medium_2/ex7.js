const bubbleSort = (arr) => {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let index = 0; index < arr.length - 1; index += 1) {
      let left = arr[index];
      let right = arr[index + 1];

      if (left > right) {
        arr[index] = right;
        arr[index + 1] = left;
        isSorted = false;
      }
    }
  }

  return arr;
};

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]