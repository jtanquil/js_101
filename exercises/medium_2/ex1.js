const convertToPercentage = (num) => (num * 100).toFixed(2);
const isLowerCase = (char) => (char >= 'a') && (char <= 'z');
const isUpperCase = (char) => (char >= 'A') && (char <= 'Z');

const letterPercentages = (str) => {
  let counts = {
    uppercase: 0,
    lowercase: 0,
    neither: 0
  };

  for (let index = 0; index < str.length; index += 1) {
    if (isLowerCase(str[index])) {
      counts.lowercase += 1;
    } else if (isUpperCase(str[index])) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  Object.keys(counts).forEach((key) => {
    counts[key] = convertToPercentage(counts[key] / str.length);
  });

  return counts;
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }