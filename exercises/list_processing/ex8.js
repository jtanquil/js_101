// const buyFruit = (groceryArray) => {
//   let outputArray = [];

//   groceryArray.forEach((groceryItem) => {
//     for (let count = 1; count <= groceryItem[1]; count += 1) {
//       outputArray.push(groceryItem[0]);
//     }
//   });

//   return outputArray;
// };

// with list processing functions
const repeat = (fruitAndQuantity) => {
  let repeatedFruit = [];

  for (let count = 1; count <= fruitAndQuantity[1]; count += 1) {
    repeatedFruit.push(fruitAndQuantity[0]);
  }

  return repeatedFruit;
};

const buyFruit = (groceryArray) =>
  groceryArray.reduce((outputArray, fruit) =>
    [...outputArray, ...repeat(fruit)], []);

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]