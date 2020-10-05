//                          1
//                     1       1
//                 1       2       1
//             1       3       3       1
//         1       4       6       4       1
//     1       5       10      10      5       1
// 1       6       15      20      15      6       1

function pascalTriangle(row, col) {
  if (row === 0 || col === 0) {
    return 1;
  }
  if (col === 1 || col + 1 === row) {
    return row;
  }
  return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
}

console.log(pascalTriangle(6, 3));
