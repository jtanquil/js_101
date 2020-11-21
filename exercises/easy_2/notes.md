## Exercises Notes - Easy 2 ##

7. In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

```
START

# given arg1, arg2

IF (arg1 && !arg2) || (!arg1 && arg2)
  PRINT true
ELSE
  PRINT false

END
```

9. Write a function that takes a String of digits, and returns the appropriate number as an integer.

```
START

# given str, a string of numeric characters

SET counter = 0
SET int = 0

WHILE counter < length of str
  int = int + character at the index (length of str - counter) * 10 ^ (counter - 1)
  counter = counter + 1

PRINT int

END
```

For hex: same as above, except replace "character at the index" with the equivalent hex value, raised to a power of 16 instead of 10

11. Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

```
START

# given an integer, int

SET intArray = ["0", "1", "2", ... , "9"]
SET intStr = ""

IF int < 10
  PRINT intArray[int]
ELSE
  WHILE int > 0
    SET onesDigit = int % 10
    intStr = intArray[onesDigit] + intStr
    int = (int - onesDigit) / 10

PRINT intStr

END
```