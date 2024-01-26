// https://www.lintcode.com/problem/476/

const stoneGame = function (a) {
  if (!a || !a.length) {
    return 0;
  }

  let n = a.length;

  let prefix_sum = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix_sum[i + 1] += prefix_sum[i] + a[i];
  }

  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(n).fill(Infinity));
  }

  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
  }

  for (let len = 2; len < n + 1; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      for (let mid = i; mid < j; mid++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][mid] + dp[mid + 1][j] + prefix_sum[j + 1] - prefix_sum[i],
        );
      }
    }
  }

  return dp[0][n - 1];
};

console.log(stoneGame([3, 4, 3]));
