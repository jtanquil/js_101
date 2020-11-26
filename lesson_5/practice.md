1. How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

```javascript
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));
```

2. How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

```javascript
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
books.sort((a, b) => Number(a.published) - Number(b.published));
```

3. For each of these collection objects, demonstrate how you would access the letter g.

```javascript
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]); // 'g'

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]); // 'g'

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]); // 'g'

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]); // 'g'

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]); // 'g'
```

4. For each of these collection objects, demonstrate how you would change the value 3 to 4.

```javascript
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;
```

7. Given the following code, what will the final values of a and b be? Try to answer without running the code.

```javascript
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
```

`a` will still be `2`, because the assignment `arr = [a, b]` assigns the value of `a` to `arr[0]`, since `a` is a primitive value. The reassignment `arr[0] += 2` changes the value of `arr[0]`, but not the value of `a`. However, since `b` is an array, `arr[1]` is assigned the reference stored in `b`, so `b` and `arr[1]` both contain a reference to the same object in memory. Therefore, the assignment `arr[1][0] -= a` changes both `arr[1]` and `b`. This subtracts the value of `a`, `2`, from the element at index `0` of `b`, so the value of `b` is `[3, 8]`.
