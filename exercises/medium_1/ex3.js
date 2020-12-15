const rotateArray = (arr) => {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    return [].concat(arr.slice(1), arr[0]);
  }
};

const rotateRightmostDigits = (number, count) => {
  let strNumber = String(number);
  let rightIndex = count >= strNumber.length ? 0 : strNumber.length - count;
  let rightDigits = strNumber.slice(rightIndex);
  let leftDigits = strNumber.slice(0, rightIndex);

  let rotatedRightDigits = rotateArray(rightDigits.split("")).join("");

  return leftDigits + rotatedRightDigits;
};

const maxRotation = (number) => {
  let currentMaxRotation = String(number);
  let count = currentMaxRotation.length;

  while (count > 1) {
    currentMaxRotation = rotateRightmostDigits(currentMaxRotation, count);

    count -= 1;
  }

  return Number(currentMaxRotation);
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

console.log(Number(rotateRightmostDigits(105, 3)));