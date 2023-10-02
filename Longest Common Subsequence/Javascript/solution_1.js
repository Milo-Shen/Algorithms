// https://leetcode.cn/problems/longest-common-subsequence/description/
const longestCommonSubsequence = function (text1, text2) {
  if (!text1 || !text2) {
    return 0;
  }

  let n = text1.length;
  let m = text2.length;

  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(m + 1).fill(0));
  }

  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < m + 1; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] !== text2[j - 1]) {
        // 这行代码的非简化版本为:  dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + 1);
      }
    }
  }

  return dp[n][m];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
