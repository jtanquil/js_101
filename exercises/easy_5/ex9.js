const logOccurrences = (counts) => {
  Object.keys(counts).forEach((key) => {
    console.log(`${key} => ${counts[key]}`);
  });
};

const countOccurrences = (vehicles) => {
  let counts = {};

  // further exploration - case insensitivity
  vehicles.map((vehicle) => vehicle.toLowerCase())
    .forEach((vehicle) => (counts[vehicle] = (counts[vehicle] + 1) || 1));

  logOccurrences(counts);
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);