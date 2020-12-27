### Notes - Medium 2 ###

1. Write a function that takes a string, and returns an object containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

**Input:** a string that contains at least one character

**Output:** an object whose keys are `lowercase/uppercase/neither` and respective values are the percentage of lowercase/uppercase/neither characters in the string

**Question:** what are lowercase/uppercase/neither characters? (lowercase characters are a-z, uppercase characters are A-Z, neither characters are every other character)

**Examples:**

```javascript
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
```

- the values of the output object are strings that are the percentages scaled out of 100 with 2 digits after the decimal

**Data Structure:** the input is a string and the output is an object. Since the values of the output object are string representations of numbers that are formatted in a particular way we can use explicit type coercion from number to string to get the format we want

**Algorithm:** given a string `str`,

1. create a new object `counts` whose keys are `uppercase/lowercase/neither` and respective values are `0`.
2. iterate through the characters of `str`. for each `char`:
3. if `char` is between `a` and `z`, then it is lowercase; increment `counts[lowercase]` by 1
4. if 'char` is between `A` and `Z`, then it is uppercase; increment `counts[uppercase]` by 1
5. otherwise, `char` is neither, increment `counts[neither]` by 1
6. repeat steps 2-5 for each character in `str`
7. divide each value in `counts` by the length of `str`
8. multiply each value in `counts` by 100 to get the percent out of 100
9. convert each value in `counts` to a string with 2 digits after the decimal with `Number.prototype.toFixed`
10. return `counts`

---

2. Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

**Input:** the lengths of 3 sides of a triangle (numbers)

**Output:** `'invalid'` if the triangle is invalid - either one of the sides has length less than or equal to `0` or the sum of the lengths of the 2 shorter sides is less than or equal to the length of the longest side, or if valid, the type of triangle:

`equilateral` = every side has the same length
`isosceles` = 2 sides have the same length, and the remaining side is different
`scalene` = each side has a different length

**Assumptions**: the sides are numbers (possibly negative, but can check for that)

**Examples:**

```javascript
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
```

**Algorithm:** given three side lengths `sideOne`, `sideTwo`, `sideThree`,

1. if the minimum of the three sides is less than or equal to 0, return `invalid`
2. otherwise, if the sum of the 3 sides is less than or equal to twice the length of the longest side, return `invalid`
3. otherwise, count the number of sides whose length is the same as `sideOne`:
4. if the number of sides of the same length is 3, return `equilateral`
5. if it's 2, return `isosceles`
6. if neither, then it will be 1. check whether `sideTwo === sideThree`:
7. if it is, then return `isosceles`
8. if not, return `scalene`

---

3. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

**Input:** 3 integer values representing the angles of a triangle

**Output:** ether `"right"`, `"acute"`, `"obtuse"`, or `"invalid"`, depending on the type of triangle with the angles given

**Rules:**

1. all angles will have integer values, and are in degrees
2. to classify triangles: 
    - a triangle is `"right"` if one angle is exactly `90` degrees.
    - a triangle is `"obtuse"` if one angle is greater than `90` degrees.
    - a triangle is `"acute"` if each angle is less than `90` degrees.
    - a triangle is `invalid` if one of its angles is `0` or fewer degrees, or if the sum of its angles is not exactly `180`.

**Examples:**

```javascript
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
```

**Data Structure:** the input is three numbers, and the output is a string. We're not concerned about the order of the numbers, and the most manipulation we'll have to do is finding the minimum and maximum values of these numbers, which can be done using `Math.max` and `Math.min` without any modification to the input

**Algorithm:** given three angles `angleOne`, `angleTwo` and `angleThree`,

1. let `minAngle` be the minimum of `angleOne`, `angleTwo` and `angleThree`.
2. if `minAngle <= 0`, return `"invalid"`.
3. otherwise, if `angleOne + angleTwo + angleThree !== 180`, return `"invalid"`
4. otherwise, let `maxAngle` be the maximum of `angleOne`, `angleTwo` and `angleThree`.
5. if `maxAngle > 90`, then return `"obtuse"`
6. otherwise, if `maxAngle === 90`, return `"right"`
7. otherwise, `maxAngle < 90`, so return `"acute"`.


---

4. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year.

**Input:** an integer which denotes the year

**Output:** an integer which denotes the number of Friday the 13ths in that year

**Rules:**
  - the year is greater than `1752`, which is when the UK adopted the modern Gregorian calendar
  - assume this calendar can be used for any year `> 1752`

**Examples:**

```javascript
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
```

**Data Structure:** the input and output are both numbers. The intermediate step requires counting the number of Friday the 13ths in a year. This can be done by using the input `year` to create a `Date` object and using the instance methods of the `Date` object to count the number of Friday the 13ths in that year

**Algorithm:** given a year `year`,

1. let `date` be a `Date` object initialized to January 1st of that `year`.
2. let `count` be equal to `0`.
3. while the `year` property of `date` is still `year` (the input), perform the following loop:
4. if the day of the week of `date` is Friday and the day of the month is `13`, increment `count` by 1
  - let `startOfMonth` be a `Date` object set to the 1st day of the month that `date` is currently on, and let `timeDiff = date - startOfMonth`.
  - if `date.getDay() === 5` and `timeDiff` is 13 days (in milliseconds), then `date` is a Friday the 13th. increment `count` by 1.
5. increment the `date` by 1 day.
  - call `date.setHours(date.getHours() + 24)`
6. when the loop is finished, return `count`.

---

5. Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

**Input:** an integer

**Output:** an integer that is the next featured number greater than the input integer, or an error if there is no next featured number 

**Rules:**

1. a featured number is a number that is odd, is a multiple of `7`, and has all of its digits occurring exactly once each
2. the largest possible featured number is `9876543201`

**Examples:**

```javascript
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
```

- the output has to be strictly greater than the input (otherwise, `featured(21)` would return `21`)

**Data Structure:** the input and output are both integers (numbers). Since one of the conditions for a featured number is that all of its digits occur exactly once, we will need to convert a number into a string and check its individual characters to determine whether or not it is a featured number

**Algorithm:** given a number `num`,

1. set `possibleFeaturedNumber` equal to `num`.
2. if `possibleFeaturedNumber` is greater than or equal to the maximum featured number, return the error message
3. otherwise, increment `possibleFeatureNumber` by 1.
4. if `possibleFeaturedNumber` is a featured number, return it
5. otherwise, repeat steps 2-4.

To check if a number is featured: given a `possibleFeatureNumber`,

1. if `possibleFeatureNumber` is not divisible by 7, return false
2. if `possibleFeatureNumber` is even, return false
3. if `possibleFeatureNumber` has digits that appear more than once, return false:
    - let `counts` be an empty object
    - convert `possibleFeatureNumber` into a string and split it into an array of its characters
    - for each character `char` of the array, check whether or not it is a key of `counts`. if not, add the key `char` to `counts`. if `char` IS a key of `counts`, then that means that `char` has already appeared as a digit in `possibleFeatureNumber`, return false
4. otherwise, return true

---

5. Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

**Input:** a positive integer, `count`

**Output:** an integer that is the difference between the square of the sum of the first `count` positive integers, and the sum of the squares of the first `count` integers

**Examples:**

```javascript
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
```

**Algorithm:** given a positive integer `count`,

1. let `squareOfSum = 0`, `sumOfSquares = 0`, and `loopCounter = 1`
2. while `loopCounter <= count`, run the following loop:
3. add `loopCounter` to `squareOfSum`, and add `loopCounter ** 2` to `sumOfSquares`
4. increment `loopCounter` by 1
5. once the loop exits, return `squareOfSum ** 2 - sumOfSquares`

---

7. Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

**Input:** an array with at least two elements

**Output:** the same array as the input, sorted in-place using bubble sort

**Examples:**

```javascript
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
```

- third example, the elements are sorted in lexicographic order, as strings
- using the normal relational operators, the elements are sorted in ascending order

**Algorithm:** given an array `arr` with at least 2 elements,

1. let `isSorted` be `false`.
2. while `isSorted` is `false`, perform the following loop:
3. set `isSorted` to `true`
4. iterate through the elements of `arr`: compare each consecutive pair of elements of `arr`, `left` and `right`.
5. if `left` > `right`, swap `left` and `right` and set `isSorted` to `false`.
6. perform steps 4-6 for every consecutive pair of elements in `arr`.
7. perform steps 2-6 until `isSorted` is `true` (so no elements were swapped)
8. return `arr`.

---

8. Write a program that prints the longest sentence in a string based on the number of words. 

**Input:** a string

**Output:** log the longest sentence in the string, and the length of the sentence, to the console

**Rules:**

1) sentences may end in periods `.`, exclamation points `!`, or question marks `?`
2) words are sequences of characters that are separated by a single space
3) preserve the punctuation at the end of the sentence in the console output

**Data Structure:** the input and output are both strings, but counting the length of a sentence requires splitting up the input string into an array of its words.

**Algorithm:** given a string `str`,

1. let `currentLongestSentence` and `currentSentence` both be empty arrays
2. split `str` into an array of its words. for each `word`,
3. add `word` to `currentSentence`
4. if `word` ends with a period, exclamation point or question mark, then it is the end of a sentence
    - if `currentSentence` is longer than `currentLongestSentence`, assign `currentLongestSentence` to `currentSentence`
    - assign `currentSentence` to an empty array
5. repeat steps 3 and 4 until reaching the end of the array of words of `str`.
6. `currentLongestSentence` will contain the words of the longest sentence and its length will be the number of words of the longest sentence.
7. join the elements of `currentLongestSentence`, with a single space ` ` as a delimiter, to retrieve the longest sentence of `str`, and output it and the length of `currentLongestSentence` to the console.