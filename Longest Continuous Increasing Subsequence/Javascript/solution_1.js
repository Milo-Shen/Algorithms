// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
// https://www.lintcode.com/problem/397

const findLengthOfLCIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  let len = nums.length;

  let dp = Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return Math.max(...dp);
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
