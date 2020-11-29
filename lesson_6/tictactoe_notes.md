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