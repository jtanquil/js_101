const crunch = (string) => {
  let collapsedString = "";

  for (let index = 0; index < string.length; index += 1) {
    if (collapsedString.length === 0 ||
        collapsedString[collapsedString.length - 1] !== string[index]) {
      collapsedString += string[index];
    }
  }

  return collapsedString;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// Implementation notes:
// Step 2 suggests some sort of loop
// We also need to handle the empty string case where string.length is 0
// Since in this case we need to return the empty string,
// if we never execute the loop then our function works correctly
// Therefore, a loop where the counter is compared to
// the length of the string should work
// A for loop lends itself to this