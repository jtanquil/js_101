## Exercises Notes - Easy 1 ##

1. Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Input: one integer (a number assumed to be an integer)

Output: `true` if the input's absolute value is odd, false if it's not

2.Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

```
START

SET counter = 1

WHILE counter is less than or equal to 99
  PRINT counter
  counter = counter + 2

END
```

3. Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

```
START

SET counter = 2

WHILE counter is less than or equal to 99
  PRINT counter
  counter = counter + 2

END
```

4.Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Input: width and length of a room - two numbers, assumed to be in meters

Output: area of the room in square meters and square feet

```
START

GET length, width
SET area = length * width
SET areaInSqFt = area * 10.7639

PRINT area, areaInSqFt

END
```

Further Exploration: Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

```
START

GET unit
GET length, width
SET area = length * width

IF unit is feet
  SET convertedArea = area / 10.7639
ELSE IF unit is meters
  SET convertedArea = area * 10.7639

PRINT area, convertedArea

END
```

5. Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Input: bill amount and tip rate - two numbers

Output: amount to tip and the total amount

```
START

GET bill, tipPercent
SET tipAmount = bill * (tipPercent/100)
SET totalAmount = bill + tipAmount

PRINT tipAmount
PRINT totalAmount

END
```

6. Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Input: integer greater than 0, and whether to take the sum or product

Output: the sum or product of integers between 1 and the input integer, inclusive

```
START

GET int, operation
SET counter = 1
IF operation is "s"
  SET result = 0
ELSE IF operation is "m"
  SET result = 1

WHILE counter <= int
  IF operation is "s"
    result += counter
  ELSE IF operation is "m"
    result *= counter

PRINT result

END
```

7. Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

```
START

# given string1, string2

IF string1.length > string2.length
  PRINT string2 + string1 + string2
ELSE
  PRINT string1 + string2 + string1

END
```

8. In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

```
START

# given year

IF year is divisible by 400
  PRINT true
ELSE IF year is divisible by 4 AND year is not divisible by 100
  PRINT true
ELSE
  PRINT false

END
```

10. Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

```
START

# given number

SET counter = 1
SET sum = 0

WHILE counter <= number
  IF counter is divisible by 3 or counter is divisible by 5
    sum = sum + counter
  
  counter = counter + 1

PRINT sum

END
```

11. Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

```
START

# given string

SET sum = 0
SET index = 0

WHILE counter < length of string
  sum = sum + ASCII value of character at string index counter
  counter = counter + 1

PRINT sum

END
```