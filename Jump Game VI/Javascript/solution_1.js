// https://leetcode.cn/problems/jump-game-vi/

const maxResult = function (nums, k) {
  let len = nums.length;

  let dp = Array(len).fill(-Infinity);
  dp[0] = nums[0];

  for (let i = 1; i < len; i++) {
    for (let j = Math.max(0, i - k); j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j]);
    }
    dp[i] += nums[i];
  }

  return dp[len - 1];
};

console.log(maxResult([10, -5, -2, 4, 0, 3], 2));
