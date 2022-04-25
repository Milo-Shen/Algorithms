// https://www.lintcode.com/problem/433/
// https://leetcode-cn.com/problems/number-of-islands/

const numIslands = function (grid) {
  // 对异常值进行处理
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return 0;
  }

  let row = grid.length;
  // 开始遍历岛屿
};
