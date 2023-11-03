// https://leetcode.cn/problems/longest-increasing-subsequence/
// https://www.lintcode.com/problem/76/

const lengthOfLIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  let len = nums.length;
  let dp = Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  let longest = 1;
  for (let i = 0; i < len; i++) {
    longest = Math.max(longest, dp[i]);
  }

  return longest;
};

const lengthOfLIS_1 = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  let len = nums.length;
  let dp = Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let longest = 1;
  for (let i = 0; i < len; i++) {
    longest = Math.max(longest, dp[i]);
  }

  return longest;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
