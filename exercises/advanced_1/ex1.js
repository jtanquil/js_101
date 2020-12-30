const RANDOMIZED_WORDS = {
  _ADJECTIVE: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  _NOUN: ["fox", "dog", "head", "leg", "tail", "cat"],
  _VERB: ["jumps", "lifts", "bites", "licks", "pets"],
  _ADVERB: ["easily", "lazily", "noisily", "excitedly"]
};

const getRandomWord = (key) => 
  RANDOMIZED_WORDS[key][Math.floor(Math.random() * RANDOMIZED_WORDS[key].length)];
const containsTemplateString =
  (str) => Object.keys(RANDOMIZED_WORDS).find((templateString) =>
    str.includes(templateString));

function madlibs(template) {
  return template.split(" ").map((word) => {
    let templateString = containsTemplateString(word);

    if (templateString) {
      return word.replace(templateString, getRandomWord(templateString));
    } else {
      return word;
    }
  }).join(" ");
}

let template1 = "The _ADJECTIVE brown _NOUN _ADVERB _VERB the _ADJECTIVE yellow _NOUN, who _ADVERB _VERB his _NOUN and looks around.";
let template2 = "The _NOUN _VERB the _NOUN's _NOUN.";

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".