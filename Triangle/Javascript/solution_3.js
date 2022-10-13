// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

const minimumTotal = function (triangle) {
  let memo = new Map();
  return divide_conquer(triangle, 0, 0, memo);
};

function divide_conquer(triangle, x, y, memo) {
  if (x === triangle.length) {
    return 0;
  }

  let key = `${x}-${y}`;
  if (memo.has(key)) {
    return memo.get(key);
  }

  let left = divide_conquer(triangle, x + 1, y, memo);
  let right = divide_conquer(triangle, x + 1, y + 1, memo);
  let path = Math.min(left, right) + triangle[x][y];

  memo.set(key, path);
  return path;
}

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
