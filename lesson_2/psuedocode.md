## Psuedocode Practice ##

- a function that returns the sum of two numbers:

```
Given two numbers, add them and return the sum.
```

```
START

# Given two numbers, num1 and num 2

SET sum = num1 + num2

PRINT sum

END
```

- a function that takes an array of strings, and returns a string that is all those strings concatenated together

```
Given a collection of strings.

Create an empty string that will contain the new, concatenated string.

Iterate through the collection one by one. For each iteration, concatenate the current element to the empty string created before.

After iterating through the collection, return the string that now contains the concatenated strings.
```

```
START

# Given a collection of strings called "strings"

SET concatenatedString = ""
SET index = 1

WHILE index <= length of strings
  concatenatedString = concatenatedString + string in strings at space "index"
  index = index + 1

PRINT concatenatedString

END
```

- a function that takes an array of integers, and returns a new array with every other element

```
Given a collection of integers.

Create an empty array that will contain the elements we want from the original collection.

Iterate through the collection one by one.
  - for each iteration, check if the index is odd or even.
  - if it's odd, we add it to the empty array we created before. If it's even, we don't. 
  - note: if our code is in a zero-indexed language like javascript our parity condition would be the opposite here

After iterating through the collection, return the array that now contains every other element of the given array.
```

```
START

# Given a collection of integers called "integers"

SET newArray = []
SET index = 1

WHILE index <= length of integers
  IF index is odd
     add the element of integers at space "index" to the end of newArray
  
  index = index + 1

PRINT newArray

END
```