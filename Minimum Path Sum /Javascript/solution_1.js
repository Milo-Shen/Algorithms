//https://leetcode.cn/problems/minimum-path-sum/

// 自顶向下进行 dp
const minPathSum = function (grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) {
    return -1;
  }

  let m = grid.length;
  let n = grid[0].length;

  let dp = [];

  for (let i = 0; i < m; i++) {
    dp.push(Array(n).fill(0));
  }

  dp[0][0] = grid[0][0];

  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);
