### Easy 1 ###

1. This code will not produce an error. If you assign a value to an array at an index outside of the current length of the array, Javascript will change the length of the array to that index and set the values in between to empty values (not `undefined`). So after line 2, the array `numbers` would be `[1, 2, 3, <3 empty items>, 5]`. `numbers[4]` would return undefined, but the slot will still be empty.

2. You can determine whether a given string ends with an exclamation mark by checking whether the last character in the string is an exclamation mark, for example a function like `const endsWithExclamationMark = str => str[str.length - 1] === '!';` (or you can use the built-in method `String.prototype.endsWith`).

3. The `Object.prototype.hasOwnProperty` method will return whether or not an object has the property passed in as an argument, as its own property (unlike `for/in` loops which iterate through inherited properties).

4. `munstersDescription.split("").map((char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase()).join();`

5. Line 1 will output `true` because `==` performs type coercion - `'0'` is coerced into the number `0`, then the subsequent expression `false == 0` will coerce `false` to `0` returning `true`. Line 2 will output false because `===` doesn't perform type coercion.

6. `Object.assign(target, source)` will add the properties of `source` to `target`, so `Object.assign(ages, additionalAges)` will add entries for Marilyn and Spot to `ages`. Note - this method mutates the first argument passed to it.

7. `str1.includes('Dino');` will return `false` (since `Dino` is a different string from `dino`) and `str2.includes('Dino');` will return `true`.

8. `flintstones.push('Dino');`

9. `Array.prototype.concat(array)` will append `array` to the calling array, so `flintstones.concat(['Dino', 'Hoppy']);` will add these items to the array. `push` can also take multiple arguments to push onto the array.

10. `advice.split("house")[0];`