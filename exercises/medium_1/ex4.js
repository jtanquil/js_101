/* eslint-disable max-lines-per-function */
// further exploration: stop program execution if an error occurs
// checks for invalid tokens, popping from an empty stack
// valid tokens: PUSH, ADD, SUB, MULT, DIV, MOD, POP, PRINT, integers
const isEmpty = (stack) => stack.length === 0;

const isInteger = (string) => Number(string) === parseInt(string, 10);

const minilang = (program) => {
  let stack = [];
  let register = 0;
  let commands = program.split(" ");

  let executeCommand = (command) => {
    switch (command) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        if (isEmpty(stack)) return false;

        register += stack.pop();
        break;
      case "SUB":
        if (isEmpty(stack)) return false;

        register -= stack.pop();
        break;
      case "MULT":
        if (isEmpty(stack)) return false;

        register *= stack.pop();
        break;
      case "DIV":
        if (isEmpty(stack)) return false;

        register = Math.floor(register / stack.pop());
        break;
      case "MOD":
        if (isEmpty(stack)) return false;

        register %= stack.pop();
        break;
      case "POP":
        if (isEmpty(stack)) return false;

        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        if (isInteger(command)) {
          register = Number(command);
        } else {
          return false;
        }
    }

    return true;
  };

  for (let index = 0; index < commands.length; index += 1) {
    let isValidCommand = executeCommand(commands[index]);

    if (!isValidCommand) return "An error occurred";
  }
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

console.log(minilang(`POP`));
console.log(minilang('3.4'));
console.log(minilang('hi'));
console.log(minilang('4 PUSH ADD PRINT ADD'));