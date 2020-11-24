const triangle = (int) => {
  for (let stars = 1; stars <= int; stars += 1) {
    console.log(" ".repeat(int - stars) + "*".repeat(stars));
  }
};

triangle(5);
triangle(9);