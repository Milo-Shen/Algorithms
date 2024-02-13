// https://leetcode.cn/problems/QTMn0o/description/

const subarraySum = function (nums, k) {
  let prefix_sum = [];
  prefix_sum[0] = 0;

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    prefix_sum[i + 1] = prefix_sum[i] + nums[i];
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (prefix_sum[j + 1] - prefix_sum[i] === k) {
        count++;
      }
    }
  }

  return count;
};

console.log(subarraySum([-1, -1, 1], 0));
