// https://leetcode.cn/problems/WhsWhI/description/

const longestConsecutive = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  nums = new Array(...new Set(nums));
  nums = nums.sort((a, b) => a - b);

  let num_len = nums.length;
  let dp = Array(num_len).fill(1);

  for (let i = 1; i < num_len; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  let max = 1;

  for (let i = 0; i < num_len; i++) {
    max = Math.max(max, dp[i]);
  }

  return max;
};

console.log(longestConsecutive([1, 2, 0, 1]));
