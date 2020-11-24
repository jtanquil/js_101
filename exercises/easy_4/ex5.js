const alphanumerics = "1234567890abcdefghijklmnopqrstuvwxyz";

const isPalindrome = (string) => {
  let reversedString = string.split("").reverse().join("");

  return string === reversedString;
};

const isRealPalindrome = (string) => {
  let alphanumericStr = string.toLowerCase().split("").filter((char) =>
    alphanumerics.includes(char)).join("");

  return isPalindrome(alphanumericStr);
};


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false