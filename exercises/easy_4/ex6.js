const isPalindrome = (string) => {
  let reversedString = string.split("").reverse().join("");

  return string === reversedString;
};

const isPalindromicNumber = (number) => {
  // further exploration: starting number with some 0s should make no
  // difference because the expression will still evaluate to the actual
  // value of the number, without the leading zeros - so String(0003)
  // will evaluate as String(3) = "3".
  return isPalindrome(String(number));
};

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
