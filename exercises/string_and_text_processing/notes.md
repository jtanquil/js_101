### Notes - String and Text Processing ###

1. Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

***Input:** a string - can be empty

**Output:** a boolean - `true` if all the alphabetic (assuming alphabetic characters are `a, b, ... z, A, B, ... Z`) characters in the input string are uppercase, `false` otherwise

**Examples:**

```javascript
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
```

- this function returns `true` when the input is the empty string
- ignores `4`, `!`, ` `, capitalization only makes sense for alphabetic letters

**Data Structure:** the input is a string, and we can use string methods and equality comparison to return the desired boolean output.

**Algorithm:** given a string `str`,

1. let `upperCaseStr` be a copy of a `str` where every alphabetic character is uppercase (transform any lowercase characters to uppercase, keep uppercase letters the same)
2. return `true` if `str` and `upperCaseStr` are equal, `false` otherwise

---

2. Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

**Input:** an array of strings

**Output:** an array where the vowels of each string in the input array have been removed (question: new array or mutate the old array?)

**Assumption:** return a new array. every element of the input array is a string.

**Examples:**

```javascript
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
```

- the check for vowels is case-insensitive (both `a` and `A` should be removed, etc)
- if the input has a string where every character is a vowel, the corresponding output string should be empty

**Data Structure:** both the input and output are arrays. Since we have to transform each element of the input array, we can use array methods. The elements of the array are strings, but we have to modify the strings on a character-by-character basis so we might need to split each string into an array, use appropriate arrays methods, and join the result back into a string.

**Algorithm:** given an array of strings `arr`,

1. map `arr` into another `arr` where each `word` in `arr` is stripped of its vowels:
2. for each `word` in `arr`, split `word` into an array of its characters.
3. filter out the vowels (`a, e, i, o, u, A, E, I, O, U`) from the array.
4. join the remaining characters
5. return the result from performing the mapping in steps 2-4 to each `word` in `arr`.

---

3. Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

**Input:** a string

**Output:** an object with 3 properties: `lowercase`, `uppercase`, `neither`. The corresponding values are the number of characters in the input string that are lowercase letters, uppercase letters, and neither, respectively.

**Assumptions:** lowercase letters are `a, b, c, ..., x, y, z`. Uppercase letters are `A, B, C, ..., X, Y, Z`. Every other character (numbers, punctuation, spaces, etc) is neither.

**Examples:**

```javascript
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
```

- empty string doesn't return an empty object, just one whose values are all 0 for each property.

**Data Structure:** the input is a string, the output is an object. Since we need to test each character of the string individually, we can split the input string into an array and use an array method.

**Algorithm:** given an input string `str`,

1. let `lettercaseCounter` be an object with 3 properties: `lowercase`, `uppercase`, `neither`, all whose values are set to 0.
2. split `str` into an array of its characters.
3. for each character `char` of string, test whether it is lowercase, uppercase, or neither:
4. if `char` is uppercase, increment `lettercaseCounter[uppercase]` by 1.
5. if `char` is lowercase, increment `lettercaseCounter[lowercase]` by 1.
6. if `char` is neither, increment `lettercaseCounter[neither]` by 1.
7. repeat steps 3-6 for each `char` of `str`.
8. return `lettercaseCounter`.

---

4. Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

**Input:** a string

**Output:** the string with the first character of every word capitalized and all subsequent characters in lowercase

**Assumptions:** the input string is nonempty

**Examples:**

```javascript
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
```

- `"quoted"` in the output of the 3rd call demonstrates that non-alphabetic characters don't change when they are capitalized; don't need to handle these separately

**Data Structure:** the input and output are strings, but because we need to transform each word individually, we can split the input string into an array of its words, then map that array, capitalizing each word individually.

**Algorithm:** given a string `str`,

1. split `str` into an array of its words.
2. map that array by capitalizing each `word` in the array: for each `word`, take the first character of the word, convert it to uppercase, convert the rest of the word into lowercase, then concatenate the result.
3. join the result from step 2 with ` ` as a delimiter and return the result.

---

5. Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

**Input:** a string

**Output:** the input string with every lowercase letter switched to uppercase, and every uppercase letter switched to lowercase, and every other character left unchanged.

**Examples:**

```javascript
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
```

- only alphabetic characters are actually changed

**Data Structure:** our input and output are both strings, but since we need to transform characters individually we can split out input into an array of its characters, transform them as needed, then join them back into a string.

**Algorithm:** given a string `str`,

1. split `str` into an array of its characters.
2. map the characters of that array: for each `char` of the array,
  - if `char` is lowercase, map it to its uppercase equivalent
  - if `char` is uppercase, map it to its lowercase equivalent
  - if `char` is neither, map it to `char`
3. join the result from step 2.
4. return the result from step 3. 

---

6. Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

**Input:** a string

**Output:** the input string with alternating caps: every other character, starting with the first, should be capitalized, with every subsequent character being lowercase or a non-alphabetic character

**Question:** what happens if the first character of the string is non-alphabetic, and the second is alphabetic?

**Assumption:** since the problem says "non-alphabetic characters should be counted as characters for determining when to switch cases", if the string begins with a non-alphabetic character, then that should count towards determining which characters are capitalized and which characters are lowercase

**Examples:**

```javascript
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
```

- in each of these cases, non-alphabetic characters (spaces in 1st example, underscore in 2nd, spaces and numbers in 3rd) continue the alternating capitalization scheme (assuming that alternating capitalization doesn't change non-alphabetic characters)
- this is consistent with the problem description of non-alphabetic characters being counted as characters to determine when to alternate capitalization

**Data Structure**: the input and output are both strings, but the output is the input string with changes made to some of the characters depending on their location in the string, so we will convert the input string into an array of its characters in the intermediate steps

**Algorithm:** given a string `str`,

1. split `str` into an array of its characters
2. map the array of characters: for each `char`, if its index is even, capitalize it. if its index is odd, lowercase it. (for non-alphabetic characters this doesn't change the character at all)
3. join the result from step 2 and return the resulting string.

---

7. Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

**input:** a string

**output:** a string with an alternating capitalization scheme like last problem, except non-alphabetic characters are not counted as characters for alternating capitalization

**Data Structure:** same as before - the input and output are both strings, but we have to change some of the characters in the input to get the desired output, so we will convert the input string into an array and modify the array in the intermediate steps

**Algorithm:** given a string `str`,

1. set `alphabeticalCharacters` to `0`.
2. split `str` into an array of its characters
3. map the array of characters: for each `char`, check whether or not it is alphabetical
4. if it is, increment `alphabeticalCharacters` by 1.
5. if `alphabeticalCharacters` is odd, return `char.toUpperCase()`. if it is even, return `char.toLowerCase()`.
6. if `char` is not alphabetical, return `char`.
7. join the result from step 3 and return the resulting string

---

8. Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

**input:** a string - either empty, or words separated by single spaces

**output:** an array where the elements are the words of the array concatenated to a space and the length of that word. if the input string is empty or no argument is passed, the function should return an empty array

**examples:**

```javascript
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
```

- words are sequences of characters separated by a single space; punctuation counts as part of a word

**Data Structure:** the input is a string and the output is an array. Each element of the array corresponds to a word in the input string, so we can split the string into an array of its words in the intermediate steps

**Algorithm:** given a string `str`,

1. if `str` is `undefined` or empty, return an empty array `[]`.
2. otherwise, split `str` into an array of its words (separated by a single space).
3. map the elements of the array: for each `word` in the array, map it to `word` concatenated to a space and `word.length`.
4. return the result from step 3

---

9. Write a function that takes a word and a string of text as parameters, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

**input:** a `word` and `text`, both strings.

**output:** an integer representing the number of times `word` appears in `text`.

**assumptions:** a word is a sequence of characters separated by single spaces (consistent with all word breaks being spaces)

```javascript
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

searchWord('sed', text);     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2
```

- search is case insensitive (example 1 - `'sed'` matches `'Sed'` at the beginning)
- punctuation is included in words (example 2 - `'est'` fails to match `'est,`)

**Data Structure:** the input is 2 strings and the output is an integer. In the intermediate steps, we can convert the `text` input into an array of words (sequences of characters separated by strings) and use `filter` on the array.

**Algorithm:** given strings `text` and `word`,

1. split `text` into an array of its words
2. filter `text`: for each word in text, check whether it is equal to the input string `word` (case-insensitive), keeping only the words in the array that are equal to `word`.
3. return the length of the resulting array from step 2

--- 

10. For this exercise, write a function that takes a word and a string of text as parameters, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') (`highlight` -> `**HIGHLIGHT**`)

**Algorithm**: given strings `text` and `word`,

1. split `text` into an array of its words
2. map `text`: for each word in the text, check whether it is equal to the input string `word`
3. if it isn't, return the word as is
4. if it is, return the highlighted word
5. join the resulting array from step 2 with `" "` as a delimiter, and return the result
