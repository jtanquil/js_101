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

---

4. Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

**Input:** a string that is a valid program in the stack-and-register based programming language: a sequence of commands separated by a single space

**Output:** no return value, execute the commands in the input in order

**Rules:**

1. all operations are integer operations (`DIV` is integer division, `MOD` is integer remainder)
2. input programs are valid: they will only contain the given operations/tokens, and will not perform any invalid actions like popping from an empty stack
3. the stack is initialized to `[]` and the register is initialized to `0`

**Examples:**

```javascript

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
```

- each program is a sequence of commands that are each separated by a single space
- each command is either a single word, or an integer:
        - each word is an operation on the stack and register that takes no arguments (operations are always done on the register and/or an element popped from the stack)
        - integers are commands that reassign the value of the register to that integer

**Data Structure:** the stack is an array, the register is a number, and the input is a string. Since the input is a sequence of commands separated by a single space, we can split the string into an array of its words and execute the commands individually, in sequence, using array iteration

**Algorithm:** given an input string `program`,

1. initialize `stack` to `[]` and `register` to `0`
2. split `program` into an array of its words
3. for each `word` in program, parse the command and execute it:
4. if `word` is an integer, convert it into an integer and reassign `register` to that value
5. otherwise, `word` will be one of the commands, which we execute by operating on the register and/or the last element of the stack, or logging to the console

---

5. Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

**Input:** a string

**Output:** a new string that is the input string with every number word replaced by the corresponding digit

**Questions:** does capitalization matter? what about punctutation (would `zero.` get mapped to `0.`?) what if a number word is part of another word? (`fourteen` -> `4teen`?)

**Example:**

```javascript
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
```

- have to handle the punctuation case: more generally, number words that are part of another word are replaced (here, a word is a sequence of non-space characters)

**Data Structure:** the input and output are both strings. we can use `String.prototype.replace` to replace number words with their corresponding digits. Using `replace` will handle the cases where a number word is part of a larger word. 

**Algorithm:** given a string `input`,

1. let `numberWords` be an object whose keys are the number words and whose values are the corresponding digits
2. let `outputString` be a copy of `input`.
3. for each key `key` of `numberWords`, call `replace` on `outputString` with the regex `/key/g` as the search expression and `numberWords[key]` being the replacement expression. reassign `outputString` to the result
4. return `outputString`

**Note:** it could be possible that performing this replacement with each individual number word could result in different results depending on the order of the replacements. But because each number word is replaced with a digit, and none of the number words contain a digit, then this should result in the same output string no matter what the order of the replacement is. (a more complicated regex might be possible to perform every replacement simultaneously)

---

8. For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

**Input:** an integer `nth`

**Output:** the `nth` term in the Fibonacci sequence

**Rules:** implement a recursive algorithm using memoization: store previously computed values for the Fibonacci sequence, to eliminate redunant computation - every value in the sequence up to `nth` should only be computed once and accessed from the lookup table when next needed

**Example:**

```javascript
fibonacci(7) = fibonacci(6) + fibonacci(5)

fibonacci(6) = fibonacci(5) + fibonacci(4)

...

fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2

// store 2 as fibonacci(3), use that stored value to compute fibonacci(4), ... up to fibonacci(6)
// fibonacci(5) can be computed using stored values
```

**Data Structure:** we need to store the computed values for the sequence in an array

**Algorithm:** given an integer `nth`,

0. initialize an array `memoizedFibonacci` to `[1, 1]`
1. if the `nth` number of the Fibonacci sequence is already stored in `memoizedFibonacci`, then return that element
2. if not, then compute the `nth` element of the sequence:
    - let `firstRecursiveTerm` be the `nth` - 1 term of the sequence if that term is in `memoizedFibnoacci`, or the value of the function call `fibonacci(nth - 1)` if not
    - let `secondRecursiveTerm` be the `nth` - 2 term of the sequence if that term is in `memoizedFibonacci`, or the value of the function call `fibonacci(nth - 2)` if not
    - push `firstRecursiveTerm + secondRecursiveTerm` to `memoizedFibonacci` and return the result 