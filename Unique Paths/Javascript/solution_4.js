// https://leetcode.cn/problems/unique-paths/
// https://www.lintcode.com/problem/114/

// 自底向上进行 DP

const uniquePaths = function (m, n) {
  let dp = [];

  for (let i = 0; i < m; i++) {
    dp.push(Array(n).fill(0));
  }

  for (let i = 0; i < n; i++) {
    dp[m - 1][i] = 1;
  }

  for (let i = 0; i < m; i++) {
    dp[i][n - 1] = 1;
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
    }
  }

  return dp[0][0];
};

console.log(uniquePaths(3, 7));
