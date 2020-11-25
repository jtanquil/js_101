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