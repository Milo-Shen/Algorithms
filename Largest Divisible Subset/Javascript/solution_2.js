// https://leetcode.cn/problems/largest-divisible-subset/
// https://www.lintcode.com/problem/603

const largestDivisibleSubset = function (nums) {
  if (!nums || !nums.length) {
    return nums;
  }

  let len = nums.length;
  let dp = Array(len).fill(1);
  let prev = Array(len).fill(-1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if ((nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  let last = 0;
  for (let i = 0; i < len; i++) {
    if (dp[last] < dp[i]) {
      last = i;
    }
  }

  let answer = [];
  while (last !== -1) {
    answer.unshift(nums[last]);
    last = prev[last];
  }

  return answer;
};

console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]));
