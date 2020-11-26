const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

const afterMidnight = (time) => {
  let hours = parseInt(time.slice(0, 2), 10);
  let minutes =
    parseInt(time.slice(time.length - 2), 10) + (hours * MINUTES_IN_HOUR);

  return minutes % MINUTES_IN_DAY;
};

const beforeMidnight = (time) =>
  (MINUTES_IN_DAY - afterMidnight(time)) % MINUTES_IN_DAY;

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);