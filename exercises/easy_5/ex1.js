const NUM_DEGREES = 360;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

// Further exploration - convert to positive # of degrees first
const getPositiveDegree = (number) => {
  let positiveDegree = number;

  while (positiveDegree < 0) {
    positiveDegree += NUM_DEGREES;
  }

  return positiveDegree;
};

const dms = (number) => {
  let positiveDegree = getPositiveDegree(number);
  let degrees = Math.floor(positiveDegree) % NUM_DEGREES;
  let fractionalPart = positiveDegree - Math.floor(positiveDegree);

  let floatMinutes = fractionalPart * MINUTES_IN_HOUR;
  let minutes = Math.floor(floatMinutes);

  let floatSeconds = (floatMinutes - minutes) * SECONDS_IN_MINUTE;
  let seconds = Math.floor(floatSeconds);

  return `${degrees}˚${String(minutes).padStart(2, 0)}'${String(seconds).padStart(2, 0)}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-420));
console.log(dms(400));