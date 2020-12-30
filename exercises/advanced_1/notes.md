### Notes - Advanced 1 ###

1. Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

**Input:** a text template

**Assumptions:** the text template will specify the part of speech for each word that's supposed to be madlibbed (like a normal madlib)

**Format:** the text template is a string where the blank words will be the words `_NOUN`, `_VERB`, `_ADJECTIVE`, or `_ADVERB`, indicating that this word should be filled in by a random noun/verb/adjective/adverb, respectively

**Output:** the text template, with randomized nouns, verbs, adjectives and adverbs inserted into the text in place of the "madlibbed" portions

**Data Structure:** the input and output are both strings. The randomized words can be stored in an object whose keys are the parts of speech and whose values are an array containing the available words, which makes it easier to retrieve a random word of that type when necessary. Since the process of filling in a template with words requires replacing template words with other words (where "word" is a sequence of characters separated by a single space), the intermediate steps of this function will involving splitting up the input string into an array of words

**Algorithm:** given a template string `template`,

1. split up `template` into an array of its words (where `template` is a sequence of words separated by a single space)
2. map the array from step 1 in the following way: for each `word`, if that `word` contains one of the template words above (to account for punctuation), replace that instance of the template word with a random word of that type; otherwise just return `word`
  - access the list of words of that type from the randomized words object and pick a random element from that
3. join the elements from the return value of step 2 with ` ` as a delimiter and return the result

---

2. Write a function that takes an array of arrays representing a 3x3 matrix, and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

**Input:** a 3x3 matrix - an array that contains 3 subarrays, each containing 3 elements

**Output:** a new matrix that is the transpose of the input matrix

**Rules:**

- don't modify the original matrix
- don't use external libraries

**Example:**

```javascript
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
```

**Data Structure:** the input and output are both arrays. Since the input matrix is a 2-dimensional array, we can use a nested loop to iterate through the rows and columns

**Algorithm:** let `matrix` be a 3x3 array represented as a 2D array

1. let `transpose` be an array with 3 elements, that are each empty arrays `[]`
2. iterate through the rows of `matrix` - let `i` be the current row
3. iterate through the elements of the `i`th row - let `j` be the current element of the row
4. assign `transpose[j][i]` to the value of `array[i][j]`
5. repeat steps 3-5 for each element of the `i`th row
6. repeat steps 2-5 for each row of `matrix`.
7. return `transpose`