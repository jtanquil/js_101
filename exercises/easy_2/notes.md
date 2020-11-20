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