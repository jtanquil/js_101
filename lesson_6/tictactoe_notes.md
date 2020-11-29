### Tic Tac Toe Additional Features Notes ###

1. `joinOr`

**Input:**
  - an array of numbers or strings (most generally, strings)
  - up to two strings: their default values are `, ` and `or`, respectively
**Output:**
  - a string that is the elements of the array joined, where the first input string is the delimiter between the elements, and the second string is prepended onto the last element of the array

**Examples:**

```javascript
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([2]);                     // => "2"
joinOr([1, 2]);                  // => "1 or 2"
```

- if the input array is empty, so is the output array
- if the array contains one element, just return that element as a string without any delimiters
- if the array contains two elements, join them using `''` as a delimiter, but still prepend the second input string to the last element
- otherwise, prepend the second input string to the last element, then join the elements of the array with the first input string as the delimiter

**Data Structure:**
  - input: an array and two strings
  - output: a string that is joined together from the elements of the input array and the input strings; we can use array methods to construct this string.

**Algorithm:** given an array `arr` and two strings `str1` and `str2`,

1. create a copy of the array, `arrCopy`.
2. if `arrCopy` has 0 elements, return an empty string.
3. if `arrCopy` has 1 element, return a string representation of that element.
4. if `arrCopy` has 2 elements, prepend `str2` to the last element, join those elements with a single space ` `, and return the result.
5. otherwise, prepend `str2` to the last element, join those elements with `str1`, and return the result.

3. Computer AI: Defense

**High Level Algorithm:**

1. find all immediate threats
2. if there are immediate threats, move to one of them at random
3. if there are no immediate threats, move to a random empty square (already done)

`findImmediateThreats`

**Input:**
  - a board object, with keys 1-9 representing the squares on the board, whose values are either `INITIAL_MARKER`, `HUMAN_MARKER` or `COMPUTER_MARKER`, depending on which player, if any, has filled in the square
**Output:**
  - an array of keys of the board object representing immediate threats
  - an immediate threat is an empty square in a row, column or diagonal where the human player has occupied the remaining two squares in that row, column or diagonal.

**Example:**

```javascript
findImmediateThreat(empty board) // []
findImmediateThreat({ 1, 2: HUMAN_MARKER }) // [3]
findImmediateThreat({ 1, 2: HUMAN_MARKER, 7, 8: HUMAN_MARKER }) // [3, 4, 5, 9]
```

**Data Structure:**
  - input: a board object
  - output: an array whose elements are keys of the board object that are immediate threats. since the possible winnine lines are stored in an array, whose elements are arrays containing keys of the board object, we can use array methods to transform the winning lines array into an array of immediate threats.

**Algorithm:** given a board `board`,

1. filter the elements of `WINNING_LINES` to find the winning lines that have an immediate threat.
2. map the filtered elements, mapping each winning line to the key of the board object that is an immediate threat.
3. return the result of step 2.

To find the winning lines with an immediate threat: given an element `arr` of `WINNING_LINES`

1. reduce `arr`, starting with an accumulator of 0: given an element `ele` of `arr`, add 1 to the accumulator if `board[ele] === HUMAN_MARKER`.
2. do the same with the condition `board[ele] === INITIAL_MARKER`.
3. if the result of step 1 is 2 and the result of step 2 is 1, then the line contains an immediate threat.