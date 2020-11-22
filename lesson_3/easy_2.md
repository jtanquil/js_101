### Easy 2 ###

1. `advice.replace('important', 'urgent');` will replace the first instance of `important` with `urgent`. To replace all instances of the word `important`, we need to pass the regular expression `/important/g` instead. The global `g` flag causes `replace` to test the regular expression against every match in the string, instead of only the first. The method `String.prototype.replaceAll` will also work.

2. Since `Array.prototype.concat(array2)` will return a new array, `[].concat(numbers).reverse();` and `[].concat(numbers).sort((num1, num2) => num2 - num1);` will both return a reversed copy of the original array `numbers`. The following method will work with `forEach`:

```
let numbersCopy = [];
numbers.forEach(num => numbersCopy.unshift(num)));
```

3. `numbers.includes(number1);` and `numbers.includes(number2);` will return `true` and `false`, respectively.

4. `'Four score and ' + famousWords;` and ``Four score and '.concat(famousWords);` will both work.

5. `[1, 2, 3, 4, 5].splice(2, 1);` will remove elements starting from index 2 until 1 element has been removed, mutating the array into `[1, 2, 4, 5]`.

6. `Array.prototype.flat()` will return a new array with the subarrays flattened recurisvely, so `flintstones.flat();` will return the array `['Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles']`. If `flat` isn't an option, then `concat` or the spread operator can work:

`[...flintstones.slice(0, 2), ...flintstones[2], ...flintstones[3]];`
`flintstones.slice(0, 2).concat(flintstones[2].concat(flintstones(3)));`

7. `Object.entries` will return an array of key/value pairs, which can then be filtered based on the key: `Object.entries(flintstones).filter(arr => arr[0] === 'Barney')[0];` will return `['Barney', 2]`.

8. `Array.isArray(obj)` will return `true` if `obj` is an array and `false` otherwise, so `Array.isArray(numbers);` and `Array.isArray(table);` will work.

9. We have to pad the beginning and end of the string (using `padStart` and `padEnd`) with enough spaces so that the new string is 40 characters long. First we find the length of the remaining space, `40 - title.length`. In this case, `title.length` is 25, so we have an odd number of spaces we need to split up between the beginning and end. If we want to add 8 spaces to the front and 7 to the back, then we would need `title.padStart(title.length + 8);` and `title.padEnd(title.length + 7);`.

10. `statement1.split("").filter(char => char === 't').length;` and `statement2.match(/t/g).length;` will both return the number of lower case `t` characters in each string.