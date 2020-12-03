const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const wordCap = (str) => str.split(" ").map(capitalize).join(" ");

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word')