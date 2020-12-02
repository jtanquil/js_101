// const leadingSubstrings = (str) => {
//   let outputArr = [];

//   for (let index = 1; index <= str.length; index += 1) {
//     outputArr.push(str.slice(0, index));
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

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]