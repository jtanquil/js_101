// using Math.round instead of Math.floor here would change the range
// of randomAge from [20, 120) to [20, 120] since Math.round can round up
const randomBetween = (min, max) => {
  let trueMin = Math.min(min, max);
  let trueMax = Math.max(min, max);

  return Math.floor(Math.random() * (trueMax - trueMin + 1)) + trueMin;
};

let randomAge = randomBetween(20, 120);

console.log(`Teddy is ${randomAge} years old!`);