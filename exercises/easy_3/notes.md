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