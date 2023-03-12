// https://www.lintcode.com/problem/92/

// 0,1 背包 - 第二种状态表示
//
// 状态 state
// 1. dp[i][j] 表示前 i 个数里挑出若干个数总和 <= j 的最大和是多少
//
// 方程 function
// 1. dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - A[i - 1]] + A[i - 1])  如果 j >= A[i - 1]
// 2. dp[i][j] = dp[i - 1][j] 如果  j < A[i - 1]
// 3. 第 i 个数的下标是 i - 1，所以用的是 A[i - 1] 而不是 A[i]
//
// 初始化 initialization
// 1. dp[0][0..m] = 0
//
// 答案 answer
// 1. dp[n][m]
//
// 思考:
// 这种写法的效率要比第一种低，为什么？
const backPack = (m, A) => {
  let n = A.length;

  // state: dp[i][j] 表示前 i 个数里挑出若干个数总和 <= j 的最大和是多少
  let dp = Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(m + 1).fill(-Infinity);
  }

  for (let i = 0; i <= m; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (j >= A[i - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - A[i - 1]] + A[i - 1]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][m];
};

console.log(backPack(10, [3, 4, 8, 5]));
