const logInBox = (input) => {
  let length = input.length;
  let padding = 2;
  let string1 = "+" + "-".repeat(length + padding) + "+";
  let string2 = "|" + " ".repeat(length + padding) + "|";
  let string3 = "| " + input + " |";

  console.log(string1);
  console.log(string2);
  console.log(string3);
  console.log(string2);
  console.log(string1);
};

logInBox('To boldly go where no one has gone before.');
logInBox('');

// Implementation notes:
// - we can use padEnd, padStart, and repeat string methods