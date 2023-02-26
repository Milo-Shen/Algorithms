// https://leetcode.cn/problems/unique-paths-ii/

const uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid || !obstacleGrid.length || !obstacleGrid[0] || !obstacleGrid[0].length) {
    return 0;
  }

  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let dp = [];

  for (let i = 0; i < m; i++) {
    dp.push(Array(n).fill(0));
  }

  dp[0][0] = 1;

  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      break;
    }

    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }

    dp[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        continue;
      }

      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 1],
    [0, 0],
  ]),
);
