### Notes - Medium 1 ###

1. Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return `undefined`.
If the input is an empty array, return an empty array.

**Input:** generally an array - no restrictions to elements, can also be an empty array. input could be something that isn't an array but edge cases are explicitly defined by the problem statement

**Output:** a new array whose elements are the elements of the old array, except that the first element has been "rotated" to become the last element of the array.

**Question:** what happens if the elements of the array are objects? Do the elements of the output array also need to be copies of the elements of the original input array? (for now, assume no, a shallow copy of the input array is fine)

**Examples:**

```javascript

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
```

- edge cases: non-array input returns `undefined`, empty array returns empty array, array with one element returns an exact copy of that array (no order to change)

**Data Structure:** if our input is an array, so is our output. Since we don't want to mutate the input array, we will avoid instance methods that mutate the caller and prefer methods that return a new array (avoid `push`, `shift` etc and prefer `concat`). `Array.isArray` can be used to check if the input is an array

**Algorithm:** given an array (or otherwise) `arr`,

1. if `arr` isn't an array, return `undefined`
2. if `arr` is an array and its length is `0`, return an empty array `[]`.
3. if `arr` is an array with at least one element, then take a `slice` of `arr` starting at index 1 (excluding the first element) and concatenate it to an array containing the element of `arr` at index `0`. return the result

---

2. Write a function that rotates the last `count` digits of a `number`. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

**Input:** two numbers, `number` and `count`.

**Output:** a number that is `number` where the last `count` digits have been rotated: the first digit (left-to-right) within the last `count` digits of `number` is moved to the end of `number`. 

**Questions**:
    - can `number` and `count` be non-numbers? non-integers?
    - can `number` be negative? can it be a floating point number with decimals?
    - can `count` be greater than the number of digits in `number`? can be it 0 or negative?

**Assumptions:** `count` and `number` are both positive integers. if `count` is greater than the number of digits in `number`, just treat it as if it is exactly the number of digits as `number` (in this case, rotate the entire number)

**Examples:**

```javascript
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
```

- if `count` is 1, `number` is unchanged (rotates the last digit in `number`, which changes nothing)

**Data Structure:** the input are both numbers, the output is also a number. Since the intermediate steps involve changing the order of digits in the `number` input, it would be helpful to convert `number` to a string, then convert it into an array of characters (digits) and manipulate those, before converting back to a string, and then a number.

**Algorithm:** given positive integers `number` and `count`,

1. let `strNumber` be `number` converted into a string
2. take a slice of `strNumber` starting at index `strNumber.length - count` (if `count > strNumber.length`, then just take a slice starting at index `0`), and split that slice into an array of characters
3. let `rotatedDigits` be the array from part 2 rotated with `rotateArray`, joined back into a string.
4. take a slice of `strNumber` from index 0 up to `strNumber.length - count` (if `count > strNumber.length`, just take the empty string) and concatenate this slice to the string from step 3
5. convert the concatenated string from step 4 back into a number and return the result

---

3. Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

**Input:** an integer

**Output:** the maximum rotation of that integer

**Questions:** can integer be negative? (assume no)

**Examples:**

```javascript
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
```

- stopping condition is when doing a rightmost rotation doesn't change the value of the number
- 4th example shows what to do with leading zeros: 105 -> 051 (fix 0) -> 015 (fix 01) -> 015 (stop). only get rid of leading zeros when returning the max rotation, until then they're still considered part of the number for purposes of being counted as digits to fix

**Data Structure:** the input and output are both numbers, but since we have to manipulate the order of the digits, we will have to convert the number into a string and an array of its characters. Also, due to how leading zeros are counted as fixed digits when computing the max rotation, we will need to keep our numbers as strings until the very end of the algorithm when we convert our return value back to a number because otherwise we will get rid of leading zeros prematurely

**Algorithm:** given an integer `number`,

1. assign `currentMaxRotation` to `number` converted to a string
2. let `count` be the length of `currentMaxRotation` (the number of digits of `number`)
3. let `currentRotation` be `currentMaxRotation` where the `count` rightmost digits have been rotated (this is the same as `rotateRightmostDigits(currentMaxRotation, count)` except that `currentMaxRotation` is a string, and this function should also return a string to preserve leading zeros)
4. if `currentMaxRotation` is equal to `currentRotation`, then convert `currentMaxRotation` to a number and return the result
5. if not, decrement `count` by 1, reassign `currentMaxRotation` to `currentRotation` and repeat steps 2-4.
6. when `count` reaches 1, then `currentMaxRotation` will have to equal `currentRotation` and the function will return.