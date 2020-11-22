### Hard 1 ###

1. `first()` returns the object `{ prop1: "hi there" }` and `second()` returns `undefined`, because the Javascript engine inserts a semicolon after `return`. 

2. Since `object["first"]` is an array, it is an object, so setting `numArray = object["first"]` means that `numArray` and `object["first"]` are pointing to the same array in memory. Therefore, mutating `numArray` mutates `object["first"]` so `console.log(object);` outputs `{ first: [1, 2] }`.

3. A and B would both output:

```
one is: ["one"]
two is: ["two"]
three is: ["three"]
```

In both cases this is because the parameters `one, two, three` in `messWithVars` shadow the variables `one, two, three` in the outer scope. In A and B, the reassignments in lines 2-4 reassign the parameters `one, two, three` in the local scope; the `one, two, three` defined in lines 7-9 in the outer scope are untouched. C will output:

```
one is: ["two"]
two is: ["three"]
three is: ["one"]
```

Since `one, two, three` are arrays, they are passed by reference, and in C, `messWithVars` actually mutates these arrays via the `splice` method.