const transpose = (matrix) => {
  let transpose = [[], [], []];

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      transpose[col][row] = matrix[row][col];
    }
  }

  return transpose;
};

const transposeInPlace = (matrix) => {
  for (let i = 0; i < 3; i += 1) {
    for (let j = i; j < 3; j += 1) {
      [ matrix[i][j], matrix[j][i] ] = [ matrix[j][i], matrix[i][j] ];
    }
  }

  return matrix;
};

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

transposeInPlace(matrix);
console.log(matrix);