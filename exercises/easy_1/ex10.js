const multisum = (number) => {
  let sum = 0;

  for (let counter = 1; counter <= number; counter += 1) {
    if ((counter % 3 === 0) || (counter % 5 === 0)) {
      sum += counter;
    }
  }

  return sum;
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168