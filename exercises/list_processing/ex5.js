// const leadingSubstrings = (str) => {
//   let outputArr = [];

//   for (let index = 1; index <= str.length; index += 1) {
//     outputArr.push(str.slice(0, index));
//   }

//   return outputArr;
// };

// const substrings = (str) => {
//   let outputArr = [];

//   for (let startIndex = 0; startIndex < str.length; startIndex += 1) {
//     outputArr = outputArr.concat(leadingSubstrings(str.slice(startIndex)));
//   }

//   return outputArr;
// };

// Further Exploration: using list processing functions
const leadingSubstrings = (str) =>
  str.split("")
    .reduce((outputArr, char) => {
      if (outputArr.length === 0) {
        return outputArr.concat(char);
      } else {
        return outputArr.concat(outputArr[outputArr.length - 1] + char);
      }
    }, []);

const reverseString = (str) => str.split("").reverse().join("");

const trailingSubstrings = (str) =>
  leadingSubstrings(reverseString(str)).reverse()
    .map((str) => reverseString(str));

const substrings = (str) =>
  trailingSubstrings(str).reduce((substrings, trailingSubstring) =>
    [...substrings, ...leadingSubstrings(trailingSubstring)], []);

console.log(substrings('abcde'));