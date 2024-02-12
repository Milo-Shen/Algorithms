// https://leetcode.cn/problems/russian-doll-envelopes/description/

const maxEnvelopes = function (envelopes) {
  envelopes = envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  let n = envelopes.length;
  let dp = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let longest = 1;
  for (let i = 0; i < n; i++) {
    longest = Math.max(longest, dp[i]);
  }

  return longest;
};

console.log(
  maxEnvelopes([
    [10, 8],
    [1, 12],
    [6, 15],
    [2, 18],
  ]),
);
