## Assignment Notes - Lesson 2 ##

### Mortgage Calculator ###

Input: loan amount (in dollars), APR (percentage, out of 100), loan duration (in months)

Output: monthly payment (in dollars)

Validation:

- loan amount: dollar amount, positive number, 2 digits after the decimal
- APR: nonnegative number
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

### RPS Bonus Features ###

2. Shortened Input

Input: one of ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp']

Output: one of ['rock', 'paper', 'scissors', 'lizard', 'spock'] corresponding to the input

```
START

GET input

WHILE input is not in ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp']
  GET input

IF input is in ['r', 'p', 'sc', 'l', 'sp']
  SET choice = corresponding element of ['rock', 'paper', 'scissors', 'lizard', 'spock']

PRINT choice

END
```