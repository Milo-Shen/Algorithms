// https://leetcode.cn/problems/unique-paths/
// https://www.lintcode.com/problem/114/

const DIRECTIONS = [
  // 往下走
  { x: 1, y: 0 },
  // 往右走
  { x: 0, y: 1 },
];

const uniquePaths = function (m, n) {
  let path_count = 0;
  let start = { x: 0, y: 0 };
  let end = { x: m - 1, y: n - 1 };

  let queue = [start];

  while (queue.length) {
    let node = queue.shift();

    if (node.x === end.x && node.y === end.y) {
      path_count++;
    }

    for (let i = 0; i < 2; i++) {
      let { x, y } = DIRECTIONS[i];
      let new_x = node.x + x;
      let new_y = node.y + y;

      if (!is_valid(new_x, new_y, m, n)) {
        continue;
      }

      queue.push({ x: new_x, y: new_y });
    }
  }

  return path_count;
};

function is_valid(x, y, m, n) {
  if (x < 0 || x >= m) {
    return false;
  }

  return !(y < 0 || y >= n);
}

console.log(uniquePaths(3, 7));
