const readline = require('readline-sync');

let name = readline.question("What is your name? ");

if (name[name.length - 1] === "!") {
  let capitalizedName = name.slice(0, name.length - 1).toUpperCase();

  console.log(`HELLO ${capitalizedName}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}