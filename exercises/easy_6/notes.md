### Notes - Easy 6 ###

1. Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

**Input:**
  - a string: could be any string, even the empty string
**Output:**
  - a new string where every character in the original string is doubled
    - for every character in the input string, that character is repeated immediately after

**Examples:**

```javascript
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
```

- when the input string is empty, the output string is also empty (there are no characters to repeat)
- spaces are also repeated, and punctuation

**Data Structure:**
  - input: string
  - output: also a string

**Algorithm:** given an input `str`,

1. create a new string `outputStr`.
2. loop through the characters of `str`. for each character `char` of `str`, append two copies of `char` to `outputStr`.
3. return `outputStr`.

2. Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

**Input:**
  - a string: could be any string, even the empty string
**Output:**
  - a new string where the consonants of the input string are doubled, and the other characters are not
    - for every consonant in the input string, that character is repeated immediately after

**Examples:**

```javascript
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
```

- like before, when the input string is empty, the output string is also empty
- unlike before, vowels, digits, punctuation or whitespace are not repeated

**Data Structure:**
  - input: string
  - output: final output is also a string, but since we have to check whether each character of the input is a consonant, we can split the input into an array and join it back into a string after doubling the consonants
  - rules: we need to check whether each character of the input string is a consonant, we can store the consonants in a string and compare each character to those elements.

**Algorithm:** given an input string `str`,

1. split `str` into an array of its characters, `strArray`.
2. map each element of `strArray` into 
  2a. itself, if it is not a consonant, or
  2b. itself doubled, if it is a consonant
3. join the result of step 2 in `outputString`.
4. return `outputString`.

3. Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

**Input:**
  - a positive integer
**Output:**
  - a positive integer: the input with its digits reversed (i.e. the first digits of the input is the ones digit of the output, the 2nd digit is the tens digit, etc)

**Examples:**

```javascript
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
```

- leading zeros get dropped from the output

**Data Structure:**
  - input: integer
  - output: the final output is an integer but because we are reversing the positions of the digits of the input, the input should first be converted into a string, converted into an array, then converted back into an integer after reversing the digits (this will also get rid of leading zeros)

**Algorithm:** let `int` be a positive integer. Then

1. create a new string, `str`, that is `int` converted into a string
2. split `str` into an array of its characters
3. reverse the elements of the array.
4. join the array back into a string
5. convert that string back into a number and return the result.

4. Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

**Input:**
  - a nonempty string
**Output:**
  - the middle character(s) of the input string:
    - if the length of the string is odd, it returns exactly one character (the middle character):
      _ _ _ _ (*) _ _ _ _ <= middle character of a 9 character string
    - if the length of the string is even, it returns exactly two characters (the characters before and after the middle of the string):
      _ _ _ (* *) _ _ _ <= two middle characters of an 8 character string

**Examples:**

```javascript
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
```

**Data Structures:**
  - input: a string
  - output: also a string
  - rules: since our output changes depending on the parity of the length of the string, we will need to manipulate the length of the string (a number). 

**Algorithm:** given a string `str`,

1. let `middle` be the floor of `str.length / 2`.
2. if `str.length` is odd, the `middle` index of `str` is the middle character of `str`, so return `str[middle]`.
3. if `str.length` is even, the `middle` and `middle - 1` indices of `str` contain the middle 2 characters of `str`, so return `str.slice(middle - 1, middle + 1)`.

5. Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

**Input:** 
  - any number
**Output:**
  - the negative of that number if the number is positive, the number as-is if it is negative. 
  - 0 returns -0

**Examples:**

```javascript
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
```

**Data Structure:** the input and output are both numbers, and the output is obtained by doing operations on numbers (turning them negative).

**Algorithm:** given a number `num`,

1. if `num < 0`, return `num`.
2. otherwise, return `-num`.

6. Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

**Input:**
  - a positive integer
**Output:**
  - an array containing the positive integers between 1 and the input, inclusive (including the input)

**Examples:**

```javascript
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
```

**Data Structures:**
  - input: a number
  - output: an array

**Algorithm:** given an integer `int`,

1. Create a new array `arr`.
2. Create a number `index` and set it to 1.
3. Push `index` to `arr`.
4. Increment `index` by 1.
5. Repeat steps 3 and 4 while `index <= int`.
6. Return `arr`.

**Further Exploration: Can you use forEach or map in your solution? Why or why not?**

Since the input is an integer, you wouldn't really be able to use one of the array methods to solve this without initializing an array first, which is most of the work done by a loop in the first place.

7. Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

**Input:**
  - a string whose format is `${firstName} ${lastName}` (can the first/last name have spaces?)
**Output:**
  - a string whose format is `${lastName}, ${firstName}`

**Examples:**

```javascript
swapName('Joe Roberts');    // "Roberts, Joe"
```

**Data Structures:**
  - input: a string
  - output: also a string, but since the function needs to swap the order of the words in the string, we will want to use an array to store the words in the input string.

**Algorithm:** given a string `str`,

1. split the string into an array whose elements are the first and last name
2. reverse the array
3. join the array using `, ` as a delimiter and return the result

8. Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

**Input:**
  - a nonnegative integer `count` and any integer `start`, in that order
**Output:**
  - an array with `count` elements, where the elements are `start * 1`, `start * 2`, ... , `start * count`.
  - if `count` is 0, the output array should be empty

**Examples:**

```javascript
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
```

**Data Structures:**
  - input: a nonnegative integer and any integer
  - output: an array

**Algorithm:** given a nonnegative integer `count` and any integer `start`,

1. create a new array `arr` and a number `index` set to 1.
2. while `index` is less than or equal to `count`, add `start * index` to the end of `arr`.
3. increment `index` by 1.
4. repeat steps 2 and 3 until `index > count`.
5. return `arr`.

9. Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

**Input:**
  - a string that is a sequence of words delimited by spaces `${word1} ${word2} ${word3} ...`
**Output:**
  - a string containing the words of the input, in reverse order

**Examples:**

```javascript
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
```

**Data Structures:**
  - input: a string
  - output: the final output is a string, but since the function manipulates the order of words in the string, we will first convert the string into an array whose elements are the words of the string in sequential order

**Algorithm:** given a string `str`,

1. split the string into its words (characters delimited by spaces) into an array `arr`
2. reverse `arr`
3. join `arr` using ` ` as a delimiter and return the result

10. Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

**Input:**
  - a string containing only letters and spaces
  - each word in the string is separated by a single space
**Output:**
  - a string containing the words from the input, but words that are five or more letters should have their letters in reverse order

**Examples:**

```javascript
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
```

**Data Structures:**
  - input: a string
  - output: the final output is a string, but we need to manipulate the individual words in the string, and also manipulate the characters of certain words, so we will need to convert the input string into an array containing its words, and also convert some words into arrays containing their characters.

**Algorithm:** given a string `str`,

1. split the string into its words (characters delimited by single spaces) into an array `arr`.
2. map `arr` into another array where words that are at least five characters long have had their letters reversed:

  2a. for each word in `arr`, check if its length is at least 5

  2b. if it isn't, just return the word
  
  2c. if it is, split the word into an array containing its characters
  
  2d. reverse that array
  
  2e. join the array and return the result

3. join the result of the map using ` ` as a delimiter and return the result.

11. Write a function that takes an Array as an argument, and reverses its elements in place; that is, mutate the Array passed into this method. The return value should be the same Array object. You may not use Array.prototype.reverse().

**Input:**
  - an array
**Output:**
  - the same array (same object) with its elements reversed (the function needs to mutate the array)
  - cannot use `Array.prototype.reverse()`

```javascript
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
```

**Data Structures:**
  - input: an array
  - output: the same array (same object)

**Algorithm:** given an array `arr`,

1. let `middle` be the floor of `arr.length / 2`, and set `index` to `0`.
2. while `index < middle`, swap the elements `arr[index]` and `arr[arr.length - 1 - index]`.
3. increment `index` by 1.
4. repeat steps 2 and 3 until `index` is equal to `middle`.
5. return `arr`.

12. Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

**Input:**
  - a string
**Output:**
  - `true` if all parentheses in the string are balanced, `false` otherwise
  - parentheses are properly balanaced when they come in matching `(` and `)` pairs, and begin with `(`

**Examples:**

```javascript
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
```

- these should all log `true`
- balanced pairs start with `(`, not `)`

**Data Structures:**
  - input: a string
  - output: a boolean

**Algorithm:** given a string `str`,

1. set a number `counter` to 0.
2. loop through the characters of `str`.
3. if the current character is a `(`, add 1 to `counter`.
4. if the current character is a `)`, subtract 1 from `counter`.
5. if `counter` is ever less than 0, return `false`.
6. repeat steps 3-5 until the end of `str` is reached.
7. return the result of `counter === 0`.