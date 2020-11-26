const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

// only works when divisor > 0
const modulo = (number, divisor) => {
  if (number > 0) {
    return number % divisor;
  } else {
    let result = number;

    while (result < 0) {
      result += divisor;
    }

    return result;
  }
};

const formatTime = (hours, minutes) =>
  `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`;

const timeOfDay = (minutes) => {
  let minutesRemainder = modulo(minutes, MINUTES_IN_DAY);
  let hours = Math.floor(minutesRemainder / MINUTES_IN_HOUR);
  let mins = minutesRemainder % MINUTES_IN_HOUR;

  return formatTime(hours, mins);
};

// further exploration
const DAYS_IN_WEEK = 7;
const DAYS_OF_WEEK =
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timeOfWeek = (deltaMinutes) => {
  let dayOfWeekIndex =
    modulo(Math.floor(deltaMinutes / MINUTES_IN_DAY), DAYS_IN_WEEK);
  let time = timeOfDay(deltaMinutes);

  return `${DAYS_OF_WEEK[dayOfWeekIndex]} ${time}`;
};

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfWeek(-4231) === "Thursday 01:29");