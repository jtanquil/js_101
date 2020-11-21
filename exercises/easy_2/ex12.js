const DIGIT_ARRAY = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const integerToString = (int) => {
  if (int < 10) {
    return DIGIT_ARRAY[int];
  } else {
    let intStr = "";
    let reducedInt = int;

    while (reducedInt > 0) {
      let onesDigit = reducedInt % 10;
      intStr = DIGIT_ARRAY[onesDigit] + intStr;

      reducedInt = (reducedInt - onesDigit) / 10;
    }

    return intStr;
  }
};

const signedIntegerToString = (int) => {
  if (int < 0) {
    return "-" + integerToString(-int);
  } else if (int > 0) {
    return "+" + integerToString(int);
  } else {
    return "0";
  }
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");