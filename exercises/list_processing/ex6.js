const leadingSubstrings = (str) => {
  let outputArr = [];

  for (let index = 1; index <= str.length; index += 1) {
    outputArr.push(str.slice(0, index));
  }

  return outputArr;
};

const substrings = (str) => {
  let outputArr = [];

  for (let startIndex = 0; startIndex < str.length; startIndex += 1) {
    outputArr = outputArr.concat(leadingSubstrings(str.slice(startIndex)));
  }

  return outputArr;
};

const reverseString = (str) => str.split("").reverse().join("");

const isPalindrome = (str) => (str.length > 1) && (str === reverseString(str));

const palindromes = (str) => substrings(str).filter((str) => isPalindrome(str));

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]