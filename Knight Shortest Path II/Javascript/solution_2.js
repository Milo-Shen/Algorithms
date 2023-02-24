// https://www.lintcode.com/problem/630
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意
// 另外一个则是 grid 是 boolean 数组，而非 0, 1 数组，和题目介绍不一样

// 使用自顶向下的动态规划

// 往左走的 4 个方向
const backward_directions = [
  { x: 1, y: -2 },
  { x: -1, y: -2 },
  { x: 2, y: -1 },
  { x: -2, y: -1 },
];

function shortestPath2(grid) {
  // 异常检测
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  let rows = grid.length;
  let cols = grid[0].length;

  let dp = [];
  for (let i = 0; i < rows; i++) {
    dp.push(Array(cols).fill(Infinity));
  }

  if (dp[rows - 1][cols - 1] === Infinity) {
    return -1;
  }

  return dp[rows - 1][cols - 1];
}

// test cases
let grid = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(shortestPath2(grid));
