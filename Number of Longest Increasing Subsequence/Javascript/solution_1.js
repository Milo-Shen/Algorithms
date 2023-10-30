// https://leetcode.cn/problems/number-of-longest-increasing-subsequence/description/

const findNumberOfLIS = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  let nums_len = nums.length;
  let max_len = 1;
  let answer = 0;

  let dp = Array(nums_len).fill(1);
  let count = Array(nums_len).fill(1);

  for (let i = 0; i < nums_len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }

    if (dp[i] > max_len) {
      max_len = dp[i];
      answer = count[i];
    } else if (dp[i] === max_len) {
      answer += count[i];
    }
  }

  return answer;
};

console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
