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