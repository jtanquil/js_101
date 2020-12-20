const MIN_ANGLE_VALUE = 1;
const SUM_OF_ANGLES = 180;

const triangle = (angleOne, angleTwo, angleThree) => {
  let minAngle = Math.min(angleOne, angleTwo, angleThree);
  if ((minAngle < MIN_ANGLE_VALUE) ||
    (angleOne + angleTwo + angleThree !== SUM_OF_ANGLES)) return `"invalid"`;

  let maxAngle = Math.max(angleOne, angleTwo, angleThree);

  if (maxAngle > 90) {
    return `"obtuse"`;
  } else if (maxAngle === 90) {
    return `"right"`;
  } else {
    return `"acute"`;
  }
};

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"