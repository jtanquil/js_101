const isFriday = (date) => date.toString().split(" ")[0] === "Fri";
const isThirteenth = (date) => date.toString().split(" ")[2] === "13";

const fridayThe13ths = (year) => {
  let currentDate = new Date(year, 0, 1);
  let count = 0;

  while (currentDate.getFullYear() === year) {
    if (isFriday(currentDate) && isThirteenth(currentDate)) count += 1;

    currentDate.setHours(currentDate.getHours() + 24);
  }

  return count;
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2