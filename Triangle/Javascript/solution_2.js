// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

// 不用记忆化搜索的时间复杂度, 时间复杂度为 2^n
const minimumTotal = function (triangle) {
  return divide_conquer(triangle, 0, 0);
};

function divide_conquer(triangle, x, y) {
  if (x === triangle.length) {
    return 0;
  }

  let left = divide_conquer(triangle, x + 1, y);
  let right = divide_conquer(triangle, x + 1, y + 1);
  return Math.min(left, right) + triangle[x][y];
}

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
