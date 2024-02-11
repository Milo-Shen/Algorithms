// https://leetcode.cn/problems/decode-ways/description/
const numDecodings = function (s) {
  if (!s || !s.length) {
    return 0;
  }

  let n = s.length;

  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = decodeOK(s.slice(0, 1));

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] * decodeOK(s.slice(i - 1, i)) + dp[i - 2] * decodeOK(s.slice(i - 2, i));
  }

  return dp[n];
};

const decodeOK = function (str) {
  let code = ~~str;
  let len = str.length;

  if (len === 1 && 1 <= code && code <= 9) {
    return 1;
  }

  if (len === 2 && 10 <= code && code <= 26) {
    return 1;
  }

  return 0;
};

console.log(numDecodings('06'));
