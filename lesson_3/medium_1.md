### Medium 1 ###

3. Changing the `do/while` loop to a `while` loop and changing the condition from `divisor !== 0` to `divisor > 0` will ensure that if `number` is 0 or negative, then the function never enters the loop body and just returns `[]`. The expression `number % divisor === 0` returns `true` if and only if `divisor` divides into `number` with no remainder, or equivalently, if `number / divisor` is a factor of `number`.

If you change line 3 from `factors.push(number / divisor);` to `factors.push(divisor);`, that would reverse the order in which the factors of `number` are pushed into `factors`, because the smaller `divisor` becomes, the larger `number / divisor` becomes.

4. `addToRollingBuffer1` will mutate the object passed in as `buffer` no matter what, because `push` and `shift` both mutate the caller. On the other hand, because `addtoRollingBuffer2` assigns `buffer` to `buffer.concat(newElement)`, which produces a new array, this function never mutates the original `buffer` object passed in as an argument. Even if line 12 runs, `buffer.shift()` is mutating a copy of `buffer` with `newElement` pushed onto it.

6. This code will output `false` because `NaN === NaN` is false. You can test if a value is `NaN` using this condition or using `Number.isNaN`.

7. The code will output `34`. Since `answer` is a number, it is a primitive value so it is passed by value into `messWithIt` through the parameter `someNumber`.

8. Since `munsters` is an object whose values are also objects, the parameter `demoObject` will contain a reference to `munsters`, and `Object.values(demoObject)` returns an array containing the same objects that are the values of `munsters`. When the callback function in `forEach` reassigns the properties of each object in `Object.values(munsters)`, it mutates the objects in `munsters`.

9. Evaluating starting from the innermost call:

`console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));`
`console.log(rps(rps("paper", "rock"), "rock"));`
`console.log(rps("paper, "rock"));`
`console.log("paper");`

So the code outputs `paper`.

10. `bar(foo());` will return `"no"`: first, the inner function call `foo()` returns `"yes"`, which is passed as an argument to `bar()` via the parameter `param`. Since `param` is not equal to `"no"`, the ternary evaluates to `"no"` which is what `bar()` returns.