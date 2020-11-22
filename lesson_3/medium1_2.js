let munstersDescription = "The Munsters are creepy and spooky.";
let swapped = munstersDescription.split("")
  .map(char =>
    (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
  .join("");

console.log(swapped);