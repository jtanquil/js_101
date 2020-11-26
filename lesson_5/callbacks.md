### Notes - Callback Functions ###

**Example 3.**

```javascript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

Action | Performed on | Side Effect | Return Value | Is Return Value Used?
--- | --- | --- | --- | ---
method call (`map`) | the outer array `[[1, 2], [3, 4]]` | None | `[1, 3]` | No
callback execution | each subarray | None | the element at index `0` of each subarray | Yes, by `map` for transformation
element access (`[0]`) | each subarray | None | the element at index `0` of the subarray | Yes, by `console.log`
method call (`console.log`) | the value of `arr[0]` | Logs string representaiton of `arr[0]` to the console | `undefined` | No
element access (`[0]`) | each subarray | None | the element at index `0` of the subarray | Yes, explicitly returned by the callback

**Example 4.**

```javascript
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

Action | Performed on | Side Effect | Return Value | Is Return Value Used?
--- | --- | --- | --- | ---
method call (`forEach`) | the outer array `[[18, 7], [3, 12]]` | None | `undefined` | Yes, assigned to `myArr`
outer callback execution | the subarrays `[18, 7]` and `[3, 12]` | None | [`undefined`, `undefined`] | No
method call (`map`) | each subarray `[18, 7]` and `[3, 12]` | None | [`undefined`, `undefined`] | Yes, explicitly returned by outer callback
inner callback execution | each element of each subarray | None | `undefined` (for every element of each subarray) | Yes, used by `map` for transformation
logical comparison `num > 5` | each element of each subarray | None | `true` if `num > 5`, `false` otherwise | Yes, by the conditional
method call (`console.log`) | the value of `num` | Outputs a string representation of `num` | `undefined` | Yes, explicitly returned by inner callback
variable declaration | `myArr` | None | `undefined` | No
variable assignment | `myArr` | None | `undefined` | No

**Example 5.**

```javascript
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

Action | Performed on | Side Effect | Return Value | Is Return Value Used?
--- | --- | --- | --- | ---
method call (`map`) | `[[1, 2], [3, 4]]` | None | `[[2, 4], [6, 8]]` | No
outer callback execution | the subarrays `[1, 2]` and `[3, 4]` | None | `[2, 4]` and `[6, 8]`, respectively | Yes, used by outer `map`
method call (`map`) | each subarray `[1, 2]` and `[3, 4]` | None | `[2, 4]` and `[6, 8]`, respectively | Yes, explicitly returned by outer callback
inner callback execution | each element of the subarray in that iteration | None | the element multiplied by `2` | Yes, used by inner `map`
`num * 2` | `num` | None | the element multiplied by `2` | Yes, returned by inner callback

**Example 6.**

```javascript
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```

Action | Performed on | Side Effect | Return Value | Is Return Value Used?
--- | --- | --- | --- | ---
method call (`filter`) | Outer array | None | `[{ c: 'cat', d: 'dog' }]` | No
outer callback execution | Each object in the outer array | None | Boolean | Yes, by `filter`
method call (`Object.keys`) | The object in the current iteration | None | The keys of the object in the current iteration | Yes, used to call `every`
method call (`every`) | `Object.keys(object)` | None | Boolean | Yes, explicitly returned by outer callback
inner callback execution | Elements of `Object.keys(object)` | None | Boolean | Yes, by `every`
object property reference (`[key]`) | `object` | None | The value of `object[key]` | Yes, by string index reference
string index reference (`[0]`) | `object[key]` | None | The character at index `0` of `object[key]` | Yes, by equality operator
strict equality operator `===` | values of `object[key][0]` and `key` | None | Boolean | Yes, returned by inner callback

What would happen if, instead of using every, we used some? How would this affect the return value of filter?

If we used `some` in the outer callback instead of `every`, then the `filter` condition would be to return objects where at least one key matches the first letter of its value, and the return value would be `[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]`.

**Example 9.**

```javascript
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```

The return value will be `[[[2, 3], [4, 5]], [6, 7]]`: there are three nested `map` calls and three corresponding callbacks. The first, outermost callback is performed on `[[1, 2], [3, 4]]` and `[5, 6]`. The middle `map` call is called on those arrays, and the corresponding middle callback is performed on `[1, 2]`, `[3, 4]`, `5` and `6`. The middle callback will return `6` and `7` when passed `5` and `6`, respectively, so the return value of the outermost callback when passed `[5, 6]` is `[6, 7]`. However, when the middle callback is passed `[1, 2]` or `[3, 4]`, since those aren't numbers, they reach the other branch of the conditional in the callback which calls the innermost `map` on those arrays. The corresponding innermost callback is performed on the elements of `[1, 2]` and `[3, 4]`, returning `2`, `3`, `4` and `5` respectively. Then the middle callback returns `[2, 3]` and `[3, 4]`, and the outer callback returns `[[2, 3], [4, 5]]` when passed `[[1, 2], [3, 4]]` and the final return value for the outermost `map` is `[[[2, 3], [4, 5]], [6, 7]]`.
