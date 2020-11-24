1. What is the return value of the filter method call below? Why?

`[1, 2, 3].filter(num => 'hi');`

This returns [1, 2, 3] because the callback returns the string 'hi' for each element of the array. 'hi' is truthy so the filter returns the entire array.

2. What is the return value of map in the following code? Why?

```
[1, 2, 3].map(num => {
  num * num; 
});
```

This returns `[undefined, undefined, undefined]`. The callback is a function expression with brackets that has no explicit return statement, so it returns `undefined` for each element of the array.

3. The following code differs slightly from the above code. What is the return value of map in this case? Why?

`[1, 2, 3].map(num => num * num);`

This returns `[1, 4, 9]`. Unlike the previous problem, the callback actually returns the value of `num * num` here since it is a one line function expression.

4. What is the return value of the following statement? Why?

`['ant', 'bear', 'caterpillar'].pop().length`

This returns `11`, the length of the string `'caterpillar'`. `Array.prototype.pop()` removes the last element from the array and returns it, in this case the string `'caterpillar'`.

5. What is the callback's return value in the following code? Also, what is the return value of every in this code?

```
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

The callback returns `2`, `4` and `6` for `1`, `2` and `3` resepctively. The return value of the assignment expression `num = num * 2` is the value of the right hand expression, in this case `2`, `4` and `6`. Therefore, `every` returns `true` since these values are all truthy.

6. How does Array.prototype.fill work? Is it destructive? How can we find out?

`Array.prototype.fill` takes one required argument, `value`, and two optional arguments, `start` and `end`, and it reassigns the values from the `start` to the `end` index of the array, not including the `end` index, with `value`. It does this destructively, which we can see by reading the documentation and running the code:

```
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
console.log(arr); // [1, 1, 1, 1, 1]
```

7. What is the return value of map in the following code? Why?

```
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

This returns `[undefined, 'bear']`. `map` will use the return value of the callback as the corresponding value in the returned array no matter what the return value is. When we pass `ant` into the callback, the callback returns `undefined`, and it returns `bear` when it is passed `bear`, so the return value of `map` is `[undefined, 'bear']`.