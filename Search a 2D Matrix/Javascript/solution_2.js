// https://leetcode.cn/problems/search-a-2d-matrix/
// https://leetcode.cn/problems/search-a-2d-matrix-ii/
// https://www.lintcode.com/problem/28/

const searchMatrix = function (matrix, target) {
  if (!matrix || !matrix.length) {
    return false;
  }

  if (!matrix[0] || !matrix[0].length) {
    return false;
  }

  let n = matrix.length;
  let m = matrix[0].length;

  let start = 0;
  let end = n * m - 1;

  while (start + 1 < end) {
    let mid = start + ~~((end - start) / 2);

    if (get(matrix, mid) < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (get(matrix, start) === target) {
    return true;
  }

  return get(matrix, end) === target;
};

function get(matrix, index) {
  let m = matrix[0].length;
  let x = ~~(index / m);
  let y = index % m;
  return matrix[x][y];
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
console.log(searchMatrix(matrix, target));
