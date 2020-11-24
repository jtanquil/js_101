const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const cleanUp = (input) => {
  let output = input.split("");
  let index = 0;

  while (index < output.length) {
    if (!ALPHABET.includes(output[index].toLowerCase())) {
      if (output[index - 1] === " ") {
        output.splice(index, 1);
        continue;
      } else {
        output[index] = " ";
      }

    }

    index += 1;
  }

  return output.join("");
};

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp(" b    a   %%%12 m"));