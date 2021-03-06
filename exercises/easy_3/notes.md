### Notes - Easy 3 ###

1. Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

"consecutive duplicate characters": two or more of the same character next to each other in a string ("aa", "bbbb", "4444444", etc)

**Input**: a string
**Output**: a new string that is the value of the old string, except all sets of consecutive duplicate characters in the string are replaced by a single copy of that character ("aaaaaaa" -> "a")

**Explicit requirements**:
  - the output is a string
  - the output is a new string

**Implicit requirements**:
  - if the input is the empty string, then the output is the empty string
  - if the input has no consecutive duplicate characters, then the output has the same value as the input

The possible relevant data structures are strings (since the input is a string and the output must also be a string) and arrays (since strings and arrays behave similarly).

**Algorithm**: given a string `str`

1. Create a new string `collapsedString` that will be the output.
2. Go through `str`, remove any consecutive duplicate characters, and add the rest to `collapsedString`.
3. Return `collapsedString`.

Idea: step 2 is vague, we need a systematic way of removing consecutive duplicate characters. We can go through the string character by character. The first character of the input is added to our output string no matter what. If the second character of the input is the same as the first character, we skip it and move onto the next character. We keep doing this until we find a character that's different, then add that to the end of our output string. Then we repeat this process, comparing the last character of our output string to the character of the input string that we're currently looking at. We can break down step 2 into these steps:

1. Set `collapsedString` to be equal to the first character of `str`.
2. If the last character of `collapsedString` is different from the second character of `str`, we add it to the end of `collapsedString`. If not, we don't add it.
3. Repeat 2b with the next character of `str` until we reach the last character of `str`.

Rethinking the steps above from the perspective of one iteration of our loop:

1. Set `currentChar` to be the current character of `str`.
2. Compare `currentChar` to the last character of `collapsedString`.
  2a. If `collapsedString` is empty, then we add `currentChar` to `collapsedString`.
  2b. If the characters are the same, then go to the next iteration of the loop.
  2c. If they're different, add `currentChar` to the end of `collapsedString`.

Another way of writing 2a-c is "if `collapsedString` is empty or if the last character of `collapsedString` and `currentChar` are different, then append `currentChar` to `collapsedString` and go to the next iteration of the loop. This can form the body of our loop.

**Further Exploration**: Because the conditional in the solution compares each character to the next character of the string, if there are any sets of consecutive duplicate characters, the loop will only add a copy of that character to `crunchText` when `index` is at the very last of those duplicate characters (for example, when iterating through `aaaab`, this function will only add `a` to `crunchText` when `index` is 3). Whether or not the last character of the input string is part of a set of consecutive duplicate characters, it needs to be added to `crunchText`, and since `text[index + 1]` will be undefined when `index` is `text.length - 1`, the last comparison will always be true so the last character will always be appended to `crunchText`. If the loop stopped iterating earlier, then the last character would never be appended to `crunchText` and our output would be incorrect.

2. Write a function that will take a short line of text, and write it to the console log within a box.

- there are three different types of strings in this box:
1. the top and bottom lines are of the form "+-----...---+" where the number of consecutive "-" characters is determined by the length of the input string
2. the 2nd and 4th lines are of the form "|    ...     |" where the number of consecutive spaces is determined by the length of the input
3. the middle line is the input string padded with some spaces and the "|" character at the beginning and end

**Input**: a string
**Output**: the three strings described above, logged to the console in this order:

String 1
String 2
String 3
String 2
String 1

which forms a box.

**Assumptions**: the output will fit onto the browser window, meaning the input strings will be one line and short.

**Explicit requirements**:
  - the output is five strings, described above, logged onto the console

**Implicit requirements**:
  - if the input is the empty string, then the output should be the same box surrounding the empty string
  - the length of our output strings will be the length of our input string + some additional length for padding. Based on the examples, the additional length is 2 characters per side = 4 characters total.

**Algorithm**: given a string `input`,

1. Set `length` to be equal to the length of `input`.
2. Create String 1.
3. Create String 2.
4. Create String 3.
5. Output these strings in the order described above.

What each string looks like depends on the input string and the length of the input string. To create string 1:

1. Set `string1` to be `+`.
2. Add copies of `-` to `string1` until the length of `string1` is equal to `length` + padding - 2.
3. Add `+` to `string1`.

String 2 is created similarly, except replacing `+` with `|` and `-` with a space ` `. To create string 3:

1. Set `string3` to be `| `.
2. Add `input` to `string3`.
3. Add ` |` to `string3`.

3. Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

**Input:** a positive integer
**Output:** a string of alternating `1`s and `0`s, starting with `1`, whose length is the input integer.

**Explicit requirements**:
  - the output is a string of 1s and 0s, that starts with 1
  - the function should work for any positive integer

**Data Structure**: the output is a string, so it makes sense to assume that we are working with strings.

**Algorithm**: given a positive integer `int`,

1. Set the output string `string` to be equal to the empty string
2. Add `1`s and `0`s to `string`, alternating, starting with `1`, until the length of `string` is `int`.
3. Return `string`.

Step 2 can be thought of as a loop that terminates when the length of `string` is `int`. Another way of thinking about "add `1`s and `0`s in an alternating sequence, starting with `1`" is to look at what indices of `string` are `1`s and `0`s:

`stringy(9);    // "101010101"`

Here, index 0, 2, 4, 6, and 8 are `1`, and index 1, 3, 5, 7, are `0`. In general, because the string starts with `1`, the output string will have a `1` in every even index and a `0` in every odd index. So the loop in step 2 can be constructed as follows:

1. Set `currentIndex` to be the index of the element we are adding to `string`.
2. If `currentIndex` is even, add `1` to `string`. Otherwise, add `0`.
3. Repeat steps 1 and 2 until the length of `string` is `int`, then stop.

4. Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

**Note:** Fibonacci numbers are defined by the recurrence relation

`F_n = F_{n - 1} + F_{n - 2}`

where `F_0 = F_1 = 1`.

**Input:** an integer greater than or equal to 2
**Output:** the index (`n` in the above notation) of the first Fibonacci number with the number of digits specified by the input

**Data Structures**: the input and output are both integers, and each Fibonacci number is the sum of two previous Fibonacci numbers. Since Fibonacci numbers are an ordered sequence of integers, we can store them in an array. The array also makes it easy to find the index of the first Fibnoacci number that has the desired number of digits.

**Algorithm**: given an integer `int` that is greater than or equal to 2,

1. Set `fibonacciArray = [1, 1]` (the first two terms of the Fibonacci sequence)
2. Add an element to `fibonacciArray` using the recurrence relation described above.
3. If that element has `int` digits, then return the length of `fibonacciArray`. Otherwise, repeat step 2.

5. Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

**Input:** a positive integer `n`
**Output:** print a right triangle whose sides each have `n` stars.

**Explicit requirements:**
  - `n` is a positive integer
  ` the triangle's sides each have `n` stars
  - the triangle is a right triangle whose right angle is on the bottom right side

**Algorithm:** given a positive integer `n`,

1. Output a string that has n - 1 spaces followed by one `*`.
2. On the next line, output a string with n - 2 spaces and two `*`s.
3. On each subsequent line, output a string with one less space followed by one more `*`.
4. Repeat until `n` lines have been output, with the last line being `n` `*`s.

7. Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.

- double number: even-length number whose left-side digits are the same as its right-side digits. (`44` and `103103` are double numbers, `444` and `334433` are not)

**Input:** a number
**Output:** that number multiplied by 2 if it's not a double number, the number itself if it is a double number

**Explicit requirements:**
  - the input and output are both numbers

**Algorithm:** given a number `n`,

1. Check if `n` is a double number
2. If it isn't, return `2 * n`
3. If it is, return `n`

To check that `n` is a double number:

1. If `n` is odd length, then it is not a double number
2. If `n` is even length, then set `leftDigits` to be the left side digits and `rightDigits` to be the right side digits.
3. Then `n` is a double number if and only if `leftDigits` and `rightDigits` are equal.

8. Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

**Input:** 3 numbers between 0 and 100
**Output:** a letter grade assigned to the average of the input scores based on the rubric:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

**Algorithm**: given 3 numbers, `num1-3`, between `0` and `100`,

1. Compute the average, `avg` of these numbers
2. Return the grade that is associated to `avg`.

Step 2 can be done by checking these conditions sequentially on `avg`:

1. If `avg` is less than `60`, then return `F`. (because the 3 inputs are at between 0 and 100, so will the average)
2. If `avg` is less than `70`, then return `D`,

and so on.

9. Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

**Input:** a string
**Output:** a string that is a copy of the input, except all the non-alphabetic characters are replaced by spaces, and if one or more non-alphabetic characters occur in a row, they are replaced with exactly one space.

- if the input contains consecutive spaces, does the function contract that to one space?

**Explicit Requirements:**
  - the input and output are both strings

**Implicit Requirements:**
  - the function removes consecutive spaces (since they're non-alphabetic characters)\

**Data Structure:** since we are working with strings and looking at each character individually, we will probably want to convert the string into an array whose entries are the characters of the string.

**Algorithm:**

Loop through the characters of the string:
  1. Let `char` be the current character
  2. If `char` is a letter, move onto the next character. If it isn't, check whether the previous character in the string is a space.
  3. If the previous character is a space, remove `char` from the output.
  4. If the previous character isn't a space, replace `char` with a space.
  5. Repeat steps 1-4 until the last character of the string is reached.

10. Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

**Input:** an integer representing a year
**Output:** a string containing the century corresponding to the input year

**Algorithm**: given an integer `year`,

1. Subtract 1 from `year`
2. Divide the result of step 1 by 100 and add 1 to the whole part, this is the `centuryNumber`
3. If the `centuryNumber` ends in 0, 4-9, or is from 11-13, then add `th` to it
4. If not, and the `centuryNumber` ends in 1, add `st` to it
5. If not, and the `centuryNumber` ends in 2, add `nd` to it
6. Otherwise, add `rd` to it