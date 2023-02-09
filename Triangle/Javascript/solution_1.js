// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

// 不用记忆化搜索的时间复杂度, 时间复杂度为 2^n
const minimumTotal = function (triangle) {
  let min = { val: Infinity };
  traverse(triangle, 0, 0, 0, min);
  return min.val;
};

function traverse(triangle, x, y, path_sum, min) {
  if (x === triangle.length) {
    min.val = Math.min(min.val, path_sum);
    return;
  }

  traverse(triangle, x + 1, y, path_sum + triangle[x][y], min);
  traverse(triangle, x + 1, y + 1, path_sum + triangle[x][y], min);
}

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
