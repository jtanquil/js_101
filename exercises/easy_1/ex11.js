const asciiValue = (string) => {
  let sum = 0;

  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0