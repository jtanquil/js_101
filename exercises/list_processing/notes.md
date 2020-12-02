### Notes - List Processing ###

1. Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

**Input:** a positive integer

**Output:** another integer, the sum of its digits

- do this without using `for`, `while`, or `do...while` loops

**Examples:**

```javascript
sum(23);           // 5 = 2 + 3
sum(496);          // 19 = 4 + 9 + 6
sum(123456789);    // 45 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
```

**Data Structure:** input is an integer. Output is also an integer, but since we need to work with the individual digits of the input, and also cannot use loops, we will need an array in the intermediate steps.

**Algorithm:** given an integer `int`,

1. convert `int` into a string
2. split the split into an array containing its characters
3. map each character of the array into its corresponding integer
4. reduce that array by summing its elements
5. return the result of step 4

2. Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

**Input:** an array of integers between `0` and `19`, inclusive; most generally, an array whose elements are integers between `0` and `19`.

(question: are there any other restrictions on the array? the example is just the array `[0, 1, 2, ... , 18, 19]` but are more general arrays where the elements range between `0` and `19` allowed?)

**Output:** an array whose integers are sorted based on the English word for each number

(question: does this function mutate the input array or return a new array? is the ordering the standard lexicographical ordering on strings?)

**Assumptions:** the input can be any array whose elements are in the range between `0` and `19`. The function should return a new array, and the sorting is based on the standard lexicographical ordering on strings. (i.e. `0 > 1` because `'zero' > 'one'`)

**Examples:**

```javascript
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
alphabeticNumberSort([1, 2, 3, 4, 4]); // [4, 4, 1, 3, 2] since four < one < three < two
```

**Data Structure:** the input and output are both arrays. Since we have to sort the array using not the numerical values in the arrays but their corresponding English words, we can store the numbers and their corresponding words as key/value pairs in an object, which can act as a lookup table when we sort the array.

**Algorithm:** given an array `arr` whose elements are integers between `0` and `19`,

1. create an object `dict` whose keys are the integers between `0` and `19`, inclusive, and whose values are the corresponding English words.
2. let `outputArr` be a copy of `arr`.
3. sort `outputArr` by comparing pairs of integers in `outputArr` to their English words using the standard lexicographical ordering on strings.
4. return the sorted array.

3. Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

**Input:** two arrays, each containing a list of numbers. Neither array will be empty

**Output:** an array containing the product of every possible combination of number pairs that exist between the two arrays: the array contains all products `a * b` for every `a` in the first array and `b` in the second. The array should be sorted in ascending numerical order

**Examples:**

```javascript
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
```

- here the possible products are: `2 * 4, 2 * 3, 2 * 1, 2 * 2, 4 * 4, 4 * 3, 4 * 1, 4 * 2`.
- duplicates are allowed

**Data Structure:** the input is a pair of arrays, the output is one array.

**Algorithm:** given two arrays `arr1` and `arr2` of numbers,

1. create a new array `outputArr`.
2. loop through the elements of `arr1`.
3. for each element `a` of `arr1`, loop through the elements of `arr2`.
4. for each element `b` of `arr2`, push the product `a * b` to `outputArr`.
5. repeat steps 3 and 4 until exhausting every possible pair of elements from `arr1` and `arr2`.
6. sort `outputArr` in ascending numerical order and return the result.

4. Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

**Input:** a string (question: can it be the empty string?)

**Output:** an array containing all substrings that start at the beginning of the string, ordered from shortest to longest.

**Assumptions:** the input string is allowed to be empty, and the output is the empty array. The function doesn't treat the empty string as a substring of all strings.

**Examples:**

```javascript
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
```

- the input string itself is a substring of the input that starts at the beginning of the string

**Data Structure:** the input is a string and the output is an array.

**Algorithm:** given a string `str`,

1. create a new array `outputArr`.
2. let `index` be 1
3. take the substring of `str` starting from the beginning of the string to index `index`, and push the result to `outputArr`.
4. increment `index` by 1.
5. repeat steps 2-4 as long as `index <= str.length`.
6. `outputArr` will already be sorted by index length, so return it as is.

5. Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the `leadingSubstrings` function you wrote in the previous exercise:

**Input:** a string (question: is it allowed to be the empty string?)

**Output:** an array containing all substrings of the input string. The elements should be ordered by where the substring begins (increasing order of the starting index of the substring). If two substrings start at the same index of the string, they should be ordered in increasing order by length.

**Assumptions:** the input string can be empty; the output will just be an empty array. The function doesn't treat the empty string as a substring of all strings.

**Examples:**

```javascript
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde", // start at index 0
  "b", "bc", "bcd", "bcde", // start at index 1
  "c", "cd", "cde", // start at index 2
  "d", "de", // start at index 3
  "e" ] // start at index 4
```

**Data Structure:** our input is a string and our output is an array. 

**Algorithm:** given a string `str`,

1. create a new array `outputArr`.
2. loop through the characters in `str`, going from the start of `str` to the end.
3. for each character in `str`, push all leading substrings of the substring of `str` starting at that character to `outputArr`. (use the function from the previous problem)
4. repeat step 3 until reaching the end of `str`.
5. `outputArr` should be sorted in the specified order, so return it as is.

**Further Exploration:** given a string `str`,

1. find all trailing substrings of `str` (substrings of `str` that end at the end of the string):
  - reverse `str`
  - find all leading substrings of the reversed `str`
  - reverse each of these leading substrings
  - reverse the array containing these leading substrings
2. map each trailing substring of `str` to the array containing its leading substrings
3. destructure the elements of the mapped array and return the result

6. Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, `AbcbA` is a palindrome, but `Abcba` and `Abc-bA` are not. In addition, assume that single characters are not palindromes.

**Input:** a string

**Output:** an array containing all palindromic substrings of the input string
  - palindromes are strings that read the same foreward and backward
  - palindromes are case-sensitive and consider all characters
  - single characters are not palindromes
  - sorted by their order of appearance in the input string

**Assumptions:** same assumptions from problem 4/5: the string can be empty, the corresponding output should be an empty array, the empty string is not treated as a substring of all strings.

**Examples:**

```javascript
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
```

- duplicates are allowed

**Data Structure:** the input is a string and the output is an array. Since we have to find a subset of all substrings of the string based on some condition, we can use array methods to filter the array of all substrings.

**Algorithm:** given a string `str`,

1. let `substrings` be the array containing all substrings, obtained from the solution for problem 5.
2. filter `substrings`, keeping only the substrings that are palindromes: substrings whose length is greater than 1, and read the same forewards and backwards.
3. since `substrings` should already be sorted by order of appearance in the string (increasing order of the starting index of the substring), the filtered array should retain this order, so return it as is.

7. Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

**Input:** an array of numbers, that contains at least one number.

**Output:** a number that is the sum of sums of each leading subsequence of the input array. A leading subsequence of an array is any subsequence that starts at the beginning of the array (the leading subsequences of `[1, 2, 3]` are `[1], [1, 2], [1, 2, 3]`.)

**Examples:**

```javascript
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // (4) = 4
sumOfSums([1, 2, 3, 4, 5]);  // (1) + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 4 + 5) = 35
```

**Data Structure:** the input is an array of numbers. The output is a number. Since we have to find the sums of subarrays of the input array, we can use array methods on those subarrays.

**Algorithm:** given an array `arr`,

1. set `sum` to 0.
2. loop over the leading subsequences of `arr`:
  - set `index` to 1.
  - get the subarray of `arr` from index `0` to `index`.
  - increment `index` by 1.
  - repeat until `index` is equal to the length of `arr`.
3. for each leading subsequence of `arr`, find the sum of its elements and add the result to `sum`.
4. return `sum`.