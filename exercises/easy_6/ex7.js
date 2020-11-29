// const swapName = (name) => name.split(" ").reverse().join(", ");

// further exploration with middle names
const swapName = (name) => {
  let names = name.split(" ");
  let lastName = names[names.length - 1];

  return [lastName, names.slice(0, names.length - 1).join(" ")].join(", ");
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
