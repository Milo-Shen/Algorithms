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

  dp[0][0] = 0;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (grid[i][j]) {
        continue;
      }

      // 遍历到达 dp[i][j] 这个点的可能的 4 个方向
      for (let delta of backward_directions) {
        let come_x = i + delta.x;
        let come_y = j + delta.y;

        if (0 <= come_x && come_x < rows && 0 <= come_y && come_y < cols) {
          dp[i][j] = Math.min(dp[i][j], dp[come_x][come_y] + 1);
        }
      }
    }
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
