const isLowercase = (char) => 'a' <= char && char <= 'z';
const isUppercase = (char) => 'A' <= char && char <= 'Z';

const letterCaseCount = (str) => {
  let lettercaseCounter = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  str.split("").forEach((char) => {
    if (isLowercase(char)) {
      lettercaseCounter.lowercase += 1;
    } else if (isUppercase(char)) {
      lettercaseCounter.uppercase += 1;
    } else {
      lettercaseCounter.neither += 1;
    }
  });

  return lettercaseCounter;
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }