// https://leetcode.cn/problems/search-a-2d-matrix-ii/

const searchMatrix = function (matrix, target) {
  if (!matrix || !matrix.length) {
    return false;
  }

  if (!matrix[0] || !matrix[0].length) {
    return false;
  }

  const n = matrix.length;
  const m = matrix[0].length;

  let x = n - 1;
  let y = 0;

  while (x >= 0 && y < m) {
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] > target) {
      x--;
    } else {
      y++;
    }
  }

  return false;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 5;
console.log(searchMatrix(matrix, target));
