// https://www.lintcode.com/problem/476/

const stoneGame = function (a) {
  if (!a || !a.length) {
    return 0;
  }

  let n = a.length;
  let range_sum = get_range_sum(a);

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
        dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j] + range_sum[i][j]);
      }
    }
  }

  return dp[0][n - 1];
};

const get_range_sum = function (a) {
  let n = a.length;
  let range_sum = [];

  for (let i = 0; i < n; i++) {
    range_sum.push(Array(n).fill(Infinity));
  }

  for (let i = 0; i < n; i++) {
    range_sum[i][i] = a[i];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      range_sum[i][j] = range_sum[i][j - 1] + a[j];
    }
  }

  return range_sum;
};

console.log(stoneGame([3, 4, 3]));
