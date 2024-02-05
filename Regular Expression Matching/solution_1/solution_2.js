// https://leetcode.cn/problems/regular-expression-matching/description/

const isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;

  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(m + 1).fill(false));
  }

  dp[0][0] = true;

  // todo: has issues
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];
      } else {
        if (i !== 0) {
          dp[i][j] = dp[i - 1][j - 1] && (p[j - 1] === '.' || s[i - 1] === p[j - 1]);
        }
      }
    }
  }

  return dp[n][m];
};

const isMatch = function (s, p, i, j) {};

console.log(isMatch('aab', 'c*a*b'));
