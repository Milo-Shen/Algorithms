// https://leetcode.cn/problems/burst-balloons/description/
const maxCoins = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  nums = [1, ...nums, 1];

  let n = nums.length;

  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(n).fill(0));
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[j] * nums[k]);
      }
    }
  }

  return dp[0][n - 1];
};

console.log(maxCoins([3, 1, 5, 8]));
