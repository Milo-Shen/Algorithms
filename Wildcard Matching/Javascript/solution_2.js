// https://leetcode.cn/problems/wildcard-matching/description/

const isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;

  let dp = [];
  for (let i = 0; i < 2; i++) {
    dp.push(Array(m + 1).fill(false));
  }

  dp[0][0] = true;

  for (let i = 0; i < m; i++) {
    dp[0][i + 1] = dp[0][i] && p[i] === '*';
  }

  for (let i = 1; i <= n; i++) {
    dp[i % 2][0] = false;

    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        dp[i % 2][j] = dp[i % 2][j - 1] || dp[(i - 1) % 2][j];
      } else {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] && (p[j - 1] === '?' || s[i - 1] === p[j - 1]);
      }
    }
  }

  return dp[n % 2][m];
};

console.log(isMatch('aa', 'a'));
