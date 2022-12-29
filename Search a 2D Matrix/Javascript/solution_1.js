// https://leetcode.cn/problems/search-a-2d-matrix/
// https://www.lintcode.com/problem/28/

const searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (target === matrix[i][j]) {
        return true;
      }
    }
  }

  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
console.log(searchMatrix(matrix, target));
