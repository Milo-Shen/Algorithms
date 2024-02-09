// https://leetcode.cn/problems/regular-expression-matching/description/

const isMatch = function (s, p) {
  let n = s.length;
  let m = p.length;

  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp.push(Array(m + 1).fill(false));
  }

  // 两个空串肯定是匹配的
  dp[0][0] = true;

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] =
          j >= 2 && (dp[i][j - 2] || (i >= 1 && dp[i - 1][j] && match(s, p, i - 1, j - 2)));
      } else {
        dp[i][j] = i >= 1 && dp[i - 1][j - 1] && match(s, p, i - 1, j - 1);
      }
    }
  }

  return dp[n][m];
};

const match = function (s, p, i, j) {
  if (i < 0 || j < 0) {
    return false;
  }

  if (p[j] === '.') {
    return true;
  }

  return s[i] === p[j];
};

console.log(isMatch('aab', 'c*a*b'));
