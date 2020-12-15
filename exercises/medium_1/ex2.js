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

  return Number(leftDigits + rotatedRightDigits);
};

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);