const repeater = (string) => {
  let outputStr = "";

  for (let index = 0; index < string.length; index += 1) {
    outputStr += string[index].repeat(2);
  }

  return outputStr;
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""