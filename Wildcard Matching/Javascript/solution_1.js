// https://leetcode.cn/problems/wildcard-matching/description/

const isMatch = function (s, p) {
  if (!s || !p) {
    return false;
  }

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

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - 1] && isMatchChar(s[i - 1], p[j - 1]);
      }
    }
  }

  return dp[n][m];
};

const isMatchChar = function (s, p) {
  if (p === '?') {
    return true;
  }

  return s === p;
};

console.log(isMatch('abc', '*?c'));
