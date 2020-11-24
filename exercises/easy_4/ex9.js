const wordSizes = (string) => {
  if (string === "") {
    return {};
  } else {
    let words = string.split(" ").map(word => word.replace(/[^A-Za-z]/g, ''));
    let wordLengthCounts = {};

    words.forEach((word) => {
      wordLengthCounts[word.length] = (wordLengthCounts[word.length] + 1) || 1;
    });

    return wordLengthCounts;
  }
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}