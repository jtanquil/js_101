### PEDAC Notes ###

```
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings("")) == []
// should log: []
```

Input: string
Output: an array whose elements are the substrings of the input string that are palindromes.

Rules:
  Explicit requirements:
    - palindromes are case sensitive
    
  Implicit requirements:
    - if the input is the empty string, the output should be an empty array
    - palindromes are substrings that are at least 2 characters long, written the same forewards and backwards