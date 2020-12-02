const sum = (int) =>
  String(int).split("")
    .map((char) => Number(char))
    .reduce((sum, number) => sum + number);

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45