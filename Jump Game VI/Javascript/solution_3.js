// https://leetcode.cn/problems/jump-game-vi/

const maxResult = function (nums, k) {
  let len = nums.length;

  let dp = Array(len).fill(-Infinity);
  dp[0] = nums[0];

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j <= Math.min(len - 1, i + k); j++) {
      dp[j] = Math.max(dp[j], dp[i] + nums[j]);

      if (dp[j] >= dp[i]) {
        break;
      }
    }
  }

  return dp[len - 1];
};

console.log(maxResult([10, -5, -2, 4, 0, 3], 2));
