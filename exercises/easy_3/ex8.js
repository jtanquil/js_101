const getGrade = (grade1, grade2, grade3) => {
  let avg = (grade1 + grade2 + grade3) / 3;

  if (avg < 60) {
    return 'F';
  } else if (avg < 70) {
    return 'D';
  } else if (avg < 80) {
    return 'C';
  } else if (avg < 90) {
    return 'B';
  } else {
    return 'A';
  }
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"