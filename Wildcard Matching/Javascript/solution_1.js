// https://leetcode.cn/problems/wildcard-matching/description/

const isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;

  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(m + 1).fill(false));
  }

  dp[0][0] = true;

  for (let i = 0; i < m; i++) {
    dp[0][i + 1] = dp[0][i] && p[i] === '*';
  }

  // * 匹配上 = 0 个字符的时候:
  // dp[i][j] = dp[i][j-1]
  // * 匹配上 > 0 个字符的时候:
  // dp[i][j] = dp[i-1][j-1] || dp[i-2][j-1] || dp[i-3][j-1] || ... || dp[0][j-1]
  // 总体为 dp[i][j] = dp[i][j-1] || dp[i-1][j-1] || dp[i-2][j-1] || dp[i-3][j-1] || ... || dp[0][j-1]
  // dp[i-1][j] = dp[i-1][j-1] || dp[i-2][j-1] || dp[i-3][j-1] || ... || dp[0][j-1]
  // 所以化简后得到 dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - 1] && (p[j - 1] === '?' || s[i - 1] === p[j - 1]);
      }
    }
  }

  return dp[n][m];
};

console.log(isMatch('aa', 'a'));
