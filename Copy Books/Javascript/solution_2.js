// https://www.lintcode.com/problem/437/

const copyBooks = function (pages, k) {
  if (!pages || !pages.length || k === 0) {
    return 0;
  }

  let n = pages.length;

  let prefix_sum = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    prefix_sum[i] = prefix_sum[i - 1] + pages[i - 1];
  }

  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp.push(Array(k + 1).fill(Infinity));
  }

  for (let i = 0; i <= k; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      for (let prev = 0; prev < i; prev++) {
        let cost = prefix_sum[i] - prefix_sum[prev];
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[prev][j - 1], cost));
      }
    }
  }

  return dp[n][k];
};

const pages = [3, 2, 4];
const k = 2;
console.log(copyBooks(pages, k));
