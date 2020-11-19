## Assignment Notes - Lesson 2 ##

### Mortgage Calculator ###

Input: loan amount (in dollars), APR (percentage, out of 100), loan duration (in months)

Output: monthly payment (in dollars)

Validation:

- loan amount: dollar amount, positive number, 2 digits after the decimal
- APR: nonnegative number (that can't be empty string, since '' is coerced to 0)
- loan duration: positive integer

```
START

# given an initial prompt, an error prompt, and a validation function (returns true if valid)
PRINT initialPrompt
GET input

WHILE !validationFunction(input)
  PRINT errorPrompt
  GET input

RETURN input

END
```