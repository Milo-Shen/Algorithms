// https://www.lintcode.com/problem/724/
// https://leetcode.cn/problems/last-stone-weight-ii/

// 题型变换
// 设整个数组所有数之和为 SUM, 其中一个较小的数组之和为 X
// 问题变为求 |SUM - X - X| = |SUM - 2X| 的最小值
// 即求使得 X 尽可能接近 SUM/2 的最大值
// = 数组中挑出若干数尽可能的填满一个大小为 SUM / 2 的背包
const minimumDifference = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let n = nums.length;
  let m = ~~(sum / 2);

  // state: dp[i][j] 表示前 i 个数里挑出若干个数总和 <= j 的最大和是多少
  let dp = Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(m + 1).fill(-Infinity);
  }

  // initialization: dp[0][0..m] = 0
  for (let i = 0; i <= m; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (j >= nums[i - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i - 1]] + nums[i - 1]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return sum - 2 * dp[n][m];
};

console.log(minimumDifference([2, -1, 0, 4, -2, -9]));
