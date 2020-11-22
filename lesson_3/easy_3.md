### Easy 3 ###

1. Three ways to remove all the elements from the array `numbers` would be to set `numbers.length = 0`, `numbers.pop()` 4 times or `numbers.shift()` 4 times.

2. `console.log([1, 2, 3] + [4, 5])` would output the string `1,2,34,5` because when an object is passed to the binary operator `+` it is coerced into a string, so adding two arrays concatenates their string representations, in this case `1,2,3` and `4,5` respectively.

3. Strings act as primitive values in Javascript, so assigning `str2` the value of `str1` creates a new copy of the string `"hello there"` and assigns it to `str2`. Then when `str2` is set to `"goodbye!"`, it doesn't affect the value of `str1` so `console.log(str1)` still outputs `"hello there"`.

4. `slice` creates a shallow copy of the elements being sliced, so `arr2` is a shallow copy of `arr1`, meaning that `arr2[0]` and `arr1[0]` point to the same object in memory. Then mutating `arr2[0]` will mutate `arr1[0]` as well, so `console.log(arr1);` will output `[{ first: 42}, { second: "value2" }, 3, 4, 5]`.

5. `function isColorValid(color) { return ["blue", "green"].includes(color) }` or `function isColorValid(color) { return color === 'blue' || color === 'green' }` both work.