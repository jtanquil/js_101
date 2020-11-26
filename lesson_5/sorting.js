let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => a.length - b.length);

console.log(words);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let sum = (a, b) => a + b;

scores.sort((a, b) => a.reduce(sum, 0) - b.reduce(sum, 0));

console.log(scores);