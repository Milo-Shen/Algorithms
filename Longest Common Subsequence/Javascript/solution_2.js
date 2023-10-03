// https://leetcode.cn/problems/longest-common-subsequence/description/
const longestCommonSubsequence = function (text1, text2) {
  if (!text1 || !text2) {
    return 0;
  }

  let n = text1.length;
  let m = text2.length;

  let dp = [];
  for (let i = 0; i < 2; i++) {
    dp.push(Array(m + 1).fill(0));
  }

  for (let i = 0; i < n + 1; i++) {
    dp[i % 2][0] = 0;
  }

  for (let i = 0; i < m + 1; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    dp[i % 2][0] = 0;

    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] !== text2[j - 1]) {
        dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1]);
      } else {
        dp[i % 2][j] = Math.max(dp[(i - 1) % 2][j], dp[i % 2][j - 1], dp[(i - 1) % 2][j - 1] + 1);
      }
    }
  }

  return dp[n % 2][m];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
