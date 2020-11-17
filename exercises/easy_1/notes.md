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