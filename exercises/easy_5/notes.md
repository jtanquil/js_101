### Notes - Easy 5 ###

1. Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

**Input:** a floating point number between 0 and 360, inclusive
**Output:** a string representing the corresponding angle in degrees, minutes and seconds

**Explicit Requirements:**
  - the input is a floating point number between 0 and 360, inclusive
  - the output is a string of the form `${degrees}˚${minutes}'${seconds}"`
  - the degrees are between 0 and 360, the minutes and seconds are between 0 and 60

**Algorithm:** given an input number `num`,

1. extract the whole part of num `wholePart` and the fractional part `fractionalPart`.
2. let `degrees` be `wholepart` mod 360.
3. multiply `fractionalPart` by 60 to get the number of minutes as a floating point, `floatMinutes`.
4. extract the whole part of `floatMinutes` to `minutes`.
5. multiply the fractional part of `floatMinutes` by 60 to get the number of seconds as a floating point.
6. round that to a whole number and save the result to `seconds`.
7. return `${degrees}˚${minutes}'${seconds}"`.

2. Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

**Input:** two arrays
**Output:** one array, containing the union of the elements of the two input arrays

- union: set-theoretic union
- question: what happens if each array contains an obj with the same k/v pairs but are different objects?
  (ex/union([{a: "a"}], [{a: "a"}]))
- question: what happens if one of the input arrays contains duplicates? (ex/[1, 2, 2, 3])

**Explicit Requirements:**
  - both inputs are arrays

**Implicit Requirements:**
  - "no duplication of values": should mean that copies of objects are not considered duplicates
  - should also mean that even if one input array has duplicates (ex/[1, 2, 2, 3]) the return array shouldn't

**Algorithm:** given two arrays `arr1` and `arr2`,

1. create an empty array, `arr`.
2. loop through the elements of `arr2`: for each element of `arr2`, check if it is an element of `arr`.
3. if it is, move onto the next element of `arr2`.
4. if it isn't, add it to `arr`.
5. repeat steps 2-4 for `arr1`.
5. return `arr`.

3. Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

**Input**: an array
**Output**: an array that contains two elements: the first contains the first half of the original array elements, the second contains the rest.

**Explicit Requirements:**
  - if the input has an odd number of elements, the middle element goes into the first array
  - the output is always an array with two elements, both of which are arrays

**Implicit Requirements:**
  - if the input array has one element, the output array's first element will be an array with that one element and the second will be an empty array
  - if the input array is empty, then the output array is an array whose elements are two empty arrays

**Algorithm:** given an array `arr`,

1. let `halfLength` be half of the length of `arr`, rounded up.
2. let `outputArr1` be an array containing the first `halfLength` elements of `arr`.
3. let `outputArr2` be the rest of the elements of `arr`.
4. return `[outputarr1, outputArr2]`.

4. Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

**Input:** an array where exactly one value of the array occurs twice, and every other value occurs exactly once
**Output:** the value of the element that occurs exactly twice

**Explicit Requirements:**
  - the array contains exactly one value that occurs twice, and every other element occurs exactly once

**Algorithm:** given an array `arr`,

1. create an empty object `counts`.
2. loop through the elements of `arr`: for each element, check if that element is a property of `counts`.
3. if not, add it to the properties of `counts` with the value 1.
4. if it is, return that element, because that means this is the value of the array that occurs exactly twice.

5. Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

**Input:** two arrays, both nonempty, both containing the same number of elements
**Output:** one array, containing the elements in the input arrays in alternating order

**Algorithm:** given two input arrays, `arr1` and `arr2`,

1. create a new array `arr`.
2. add the first element of `arr1` to `arr`.
3. add the first element of `arr2` to `arr`.
4. repeat steps 2 and 3 for the second, third, etc. elements of `arr1` and `arr2` until every element from both has been added to `arr`.
5. return `arr`.

6. Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

**Input:** an array of integers
**Output:** a string representing the product of the elements of the input, divided by the number of elements in the input, rounded to 3 decimal places

**Explicit requirements:**
  - the array contains integers

**Implicit requirements:**
  - there needs to be handling of the case where the array is 0 (otherwise, the multiplicative average would be infinity, how is that rounded to three decimal places?)

**Algorithm:** given an array `arr` of integers,

1. Create a number, `product`, and set it equal to 1.
2. If `arr` contains no integers, return `Input array contains no elements`.
3. Otherwise, loop through the elements of the array.
4. For each element of the array, multiply `product` by that element and assign the result to `product`.
5. Repeat step 4 until reaching the end of the array.
6. Divide `product` by the length of `arr` and assign the result to `product`.
7. Take the value of `product`, rounded to 3 decimal places, and convert it into a string.
8. Return that string.

7. Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

**Input:** two arrays, each containing a list of numbers, containing the same number of elements
**Output:** one array, where each element is the product of the corresponding elements from the input arrays

**Explicit requirements:**
  - the two arrays both contain only numbers, and each have the same number of elements

**Algorithm:** given two arrays, `arr1` and `arr2`,

1. Create an empty array, `arr`.
2. Loop through the elements of `arr1`.
3. For each element of `arr1`, multiply it by the correspoonding element in `arr2` and add the result to `arr`.
4. Repeat step 3 for the remaining elements of `arr1`.
5. Return `arr`.

11. Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

**Input:** an integer representing the number of minutes before or after midnight
**Output:** a string representing the time in 24 hour hh:mm format

**Explicit requirements:**
  - our function must take positive and negative inputs
  - `Date` class methods may not be used

**Algorithm:** given an integer `int`,

1. Get the remainder of `int` modulo 1440 (the number of minutes in a day) to get the number of minutes since midnight of that current day.
2. Take that result and divide it by 60.
3. Assign the whole part of the result from step 2 to `hours`.
4. Take the remainder of the result from step 2 and assign it to `minutes`.
5. Return `${hours}:${minutes}`.

12. Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

**Input:** a string in 24 hour hh:mm format
**Output:** an integer between `0` and `1439` indicating the number of minutes before/after midnight

**Algorithm:** given a string `time` in 24 hour hh:mm format,

1. Take the first two characters of `time` and convert it into an integer.
2. Store the result in `hours`.
3. Convert the last two characters of time and convert it into an integer.
4. Store the result in `minutes`.
5. Multiply `hours` by the number of minutes in an hour, and add the result to `minutes`.

(after midnight)

6. Return `minutes`.

(before midnight)

7. Subtract `minutes` from the number of minutes in a day and return the result.