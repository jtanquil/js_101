### Notes - Medium 2 ###

1. Write a function that takes a string, and returns an object containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

**Input:** a string that contains at least one character

**Output:** an object whose keys are `lowercase/uppercase/neither` and respective values are the percentage of lowercase/uppercase/neither characters in the string

**Question:** what are lowercase/uppercase/neither characters? (lowercase characters are a-z, uppercase characters are A-Z, neither characters are every other character)

**Examples:**

```javascript
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
```

- the values of the output object are strings that are the percentages scaled out of 100 with 2 digits after the decimal

**Data Structure:** the input is a string and the output is an object. Since the values of the output object are string representations of numbers that are formatted in a particular way we can use explicit type coercion from number to string to get the format we want

**Algorithm:** given a string `str`,

1. create a new object `counts` whose keys are `uppercase/lowercase/neither` and respective values are `0`.
2. iterate through the characters of `str`. for each `char`:
3. if `char` is between `a` and `z`, then it is lowercase; increment `counts[lowercase]` by 1
4. if 'char` is between `A` and `Z`, then it is uppercase; increment `counts[uppercase]` by 1
5. otherwise, `char` is neither, increment `counts[neither]` by 1
6. repeat steps 2-5 for each character in `str`
7. divide each value in `counts` by the length of `str`
8. multiply each value in `counts` by 100 to get the percent out of 100
9. convert each value in `counts` to a string with 2 digits after the decimal with `Number.prototype.toFixed`
10. return `counts`

---

2. Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

**Input:** the lengths of 3 sides of a triangle (numbers)

**Output:** `'invalid'` if the triangle is invalid - either one of the sides has length less than or equal to `0` or the sum of the lengths of the 2 shorter sides is less than or equal to the length of the longest side, or if valid, the type of triangle:

`equilateral` = every side has the same length
`isosceles` = 2 sides have the same length, and the remaining side is different
`scalene` = each side has a different length

**Assumptions**: the sides are numbers (possibly negative, but can check for that)

**Examples:**

```javascript
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
```

**Algorithm:** given three side lengths `sideOne`, `sideTwo`, `sideThree`,

1. if the minimum of the three sides is less than or equal to 0, return `invalid`
2. otherwise, if the sum of the 3 sides is less than or equal to twice the length of the longest side, return `invalid`
3. otherwise, count the number of sides whose length is the same as `sideOne`:
4. if the number of sides of the same length is 3, return `equilateral`
5. if it's 2, return `isosceles`
6. if neither, then it will be 1. check whether `sideTwo === sideThree`:
7. if it is, then return `isosceles`
8. if not, return `scalene`

---

3. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

**Input:** 3 integer values representing the angles of a triangle

**Output:** ether `"right"`, `"acute"`, `"obtuse"`, or `"invalid"`, depending on the type of triangle with the angles given

**Rules:**

1. all angles will have integer values, and are in degrees
2. to classify triangles: 
    - a triangle is `"right"` if one angle is exactly `90` degrees.
    - a triangle is `"obtuse"` if one angle is greater than `90` degrees.
    - a triangle is `"acute"` if each angle is less than `90` degrees.
    - a triangle is `invalid` if one of its angles is `0` or fewer degrees, or if the sum of its angles is not exactly `180`.

**Examples:**

```javascript
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
```

**Data Structure:** the input is three numbers, and the output is a string. We're not concerned about the order of the numbers, and the most manipulation we'll have to do is finding the minimum and maximum values of these numbers, which can be done using `Math.max` and `Math.min` without any modification to the input

**Algorithm:** given three angles `angleOne`, `angleTwo` and `angleThree`,

1. let `minAngle` be the minimum of `angleOne`, `angleTwo` and `angleThree`.
2. if `minAngle <= 0`, return `"invalid"`.
3. otherwise, if `angleOne + angleTwo + angleThree !== 180`, return `"invalid"`
4. otherwise, let `maxAngle` be the maximum of `angleOne`, `angleTwo` and `angleThree`.
5. if `maxAngle > 90`, then return `"obtuse"`
6. otherwise, if `maxAngle === 90`, return `"right"`
7. otherwise, `maxAngle < 90`, so return `"acute"`.


---

4. Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year.

**Input:** an integer which denotes the year

**Output:** an integer which denotes the number of Friday the 13ths in that year

**Rules:**
  - the year is greater than `1752`, which is when the UK adopted the modern Gregorian calendar
  - assume this calendar can be used for any year `> 1752`

**Examples:**

```javascript
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
```

**Data Structure:** the input and output are both numbers. The intermediate step requires counting the number of Friday the 13ths in a year. This can be done by using the input `year` to create a `Date` object and using the instance methods of the `Date` object to count the number of Friday the 13ths in that year

**Algorithm:** given a year `year`,

1. let `date` be a `Date` object initialized to January 1st of that `year`.
2. let `count` be equal to `0`.
3. while the `year` property of `date` is still `year` (the input), perform the following loop:
4. if the day of the week of `date` is Friday and the day of the month is `13`, increment `count` by 1
  - let `startOfMonth` be a `Date` object set to the 1st day of the month that `date` is currently on, and let `timeDiff = date - startOfMonth`.
  - if `date.getDay() === 5` and `timeDiff` is 13 days (in milliseconds), then `date` is a Friday the 13th. increment `count` by 1.
5. increment the `date` by 1 day.
  - call `date.setHours(date.getHours() + 24)`
6. when the loop is finished, return `count`.