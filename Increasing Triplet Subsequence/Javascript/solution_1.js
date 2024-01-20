// https://leetcode.cn/problems/increasing-triplet-subsequence/description/

const increasingTriplet = function (nums) {
  if (!nums || !nums.length) {
    return false;
  }

  let len = nums.length;
  let dp = Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if (dp[i] >= 3) {
          return true;
        }
      }
    }
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
