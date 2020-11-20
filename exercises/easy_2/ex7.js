// need to !! to coerce certain values into booleans
const xor = (arg1, arg2) => (!!arg1 && !arg2) || (!arg1 && !!arg2);

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
console.log(xor('', NaN));
console.log(xor(null, +0))