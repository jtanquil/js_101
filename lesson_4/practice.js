// 8. Write a program that uses this array to create an object where the
// names are the keys and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObject = {};

flintstones.forEach((element, index) => {
  flintstonesObject[element] = index;
});

console.log(flintstonesObject);

// 9. Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let ageTotal = Object.values(ages).reduce((acc, ele) => acc + ele, 0);

console.log(ageTotal);

// 10. Pick out the minimum age from our current Munster family object:

let minAges = Object.values(ages).reduce(
  (minAge, currentAge) => (minAge < currentAge ? minAge : currentAge));

console.log(minAges);

// 11. Create an object that expresses the frequency with which each
// letter occurs in this string:

let statement = "The Flintstones Rock";
let frequencies = {};

statement.split("").forEach((char) => {
  if (Object.keys(frequencies).includes(char)) {
    frequencies[char] += 1;
  } else {
    frequencies[char] = 1;
  }
});

console.log(frequencies);