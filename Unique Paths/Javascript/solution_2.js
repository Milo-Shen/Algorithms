// https://leetcode.cn/problems/unique-paths/
// https://www.lintcode.com/problem/114/

const DIRECTIONS = [
  // 往下走
  { x: 1, y: 0 },
  // 往右走
  { x: 0, y: 1 },
];

const uniquePaths = function (m, n) {
  return find_path(0, 0, m, n);
};

function find_path(x, y, m, n) {
  if (!is_valid(x, y, m, n)) {
    return 0;
  }

  if (x === m - 1 && y === n - 1) {
    return 1;
  }

  let down = find_path(x + DIRECTIONS[0].x, y + DIRECTIONS[0].y, m, n);
  let right = find_path(x + DIRECTIONS[1].x, y + DIRECTIONS[1].y, m, n);

  return right + down;
}

function is_valid(x, y, m, n) {
  if (x < 0 || x >= m) {
    return false;
  }

  return !(y < 0 || y >= n);
}

console.log(uniquePaths(3, 7));
