### Notes: Easy 4 ###

2. Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

**Input**: six numbers via user input
**Output**: a message logging whether or not the sixth number appears amongst the first five numbers.

**Data Structure:** since we are dealing with a collection of strings, it makes sense to think of the first five inputs as being elements of an array.

**Algorithm**:

1. Get the six numbers `num1` through `num6`, from the user. Put `num1`-`num5` in an array, `nums`.
2. Search for `num6` in `nums`.
3. Log a message stating whether or not `num6` is in `nums`.

**Further exploration:** the ternary condition in the solution would need to change, depending on what the condition is; for instance, if we wanted whether or not a number greater than `lastNum` appears in `nums` then instead of using `nums.includes(lastNum)` as the boolean expression in the ternary condition we could replace it with `nums.some(num => num > lastNum)`.

4. Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

**Input**: a string
**Output**: true if the string is a palindrome, false otherwise

**Explicit requirements:**
  - case sensitive
  - not just alphanumeric characters

**Implicit requirements:**
  - returns true if the string is empty (because `''` reads the same forwards and backwards)

**Algorithm:** given a string `str`,

1. Let `reverseStr` be a copy of `str` that is reversed.
2. Return `true` if `str` is equal to `reverseStr`, `false` otherwise.

5. Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Similar to the previous problem except with different requirements:

**Explicit requirements:**
  - case insensitive
  - only check alphanumeric characters

**Algorithm:** given a string `str`,

1. Let `alphanumericStr` be the `str` with only alphanumeric characters and every character changed to lowercase.
2. return `true` if `alphanumericStr` is a palindrome, `false` otherwise.

7. Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

**Input:** an array of numbers
**Output:** an array of the same length, where each element is the running sum from the input array (i.e. the nth element of the output is the sum of the first n elements of the input)

**Explicit requirements:**
  - the input and output are both arrays
  - the output has the same length as the input

**Implicit requirements:**
  - if the input is empty, so is the output

**Algorithm:** given an input array `array`,

1. Create an empty array, `outputArray`.
2. Set `runningSum`, a number that will keep track of the sum of the elements of `array`, to `0`.
3. Loop through the elements of the array: for each element of the array, add it to `runningSum`, then add the current value of `runningSum` to `outputArray`.
4. Return `outputArray`.

**Further discussion:** `Array.prototype.map` is useful for problems that require transforming the elements of an array one-for-one (as in, the transformation is a function of only the element of the array). Although it's possible to solve this problem using `map` it is a little clunky because the callback requires knowledge of either the previous elements of the calling array, or previous elements of the output array (the array being returned by `map`). The callback that `map` takes allows for this flexibility but it does affect the readability of the callback.

8. Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes. Words consist of any sequence of non-space characters.

**Input:** a string
**Output:** an object containing the numbers of words of different sizes in the input string

- a word is a sequence of non-space characters.

**Explicit requirements:**
  - the input string contains zero or more space-separated words
  - the output is an object whose keys are the different lengths of words in the input, and the values are the number of words of that length in the output.

**Implicit requirements:**
  - if the input is the empty string, the output is the empty object

**Data structure:** Since the output is an object, we can store our word lengths and counts of word lengths in an object.

**Algorithm:** given a string `str`,

1. Create an array `words` containing the words of `str`.
2. Create an empty object, `wordLengthCounts`.
3. Loop through the elements of words: for each word, check if its length is a property of `wordLengthCounts`.
4. If it isn't, add it as a property of `wordLengthCounts` and set the value to 1.
5. If it is, increment its value by 1.
6. Repeat steps 3-5 for every element of `words`.
7. Return `wordLengthCounts`.

9. Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

The only modification needed here would be to change the elements of the `words` array by removing non-alphabetical characters from each word before looping through the words.

10. Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

**Input:** a string
**Output:** a string, where the first and last letters of every word in the string are swapped

**Assumptions:**
  - each string contains at least one word
  - each word contains at least one letter
  - each string contains nothing but words and spaces
  - there are no leading, trailing or repeated spaces

**Algorithm:** given a string `string`,

1. Create an array `words` containing the words of `str`.
2. Loop through the elements of `words`: for each word, set `firstLetter` and `lastLetter` be the first and last letters of the word, and `middle` to be the rest of the word (the word with the first and last letters removed).
3. If word is one character long, move onto the next word.
3. Otherwise, replace the word in `words` with the new string `lastLetter + middle + firstLetter`.
4. Repeat steps 2 and 3 for each word in `words`.
5. Turn `words` back into a string and return the resulting string.   