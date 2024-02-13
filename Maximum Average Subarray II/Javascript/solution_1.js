// https://leetcode.cn/problems/maximum-average-subarray-ii/description/

const findMaxAverage = function (nums, k) {
  if (!nums || !nums.length || nums.length < k) {
    return 0;
  }

  let prefix_sum = [];
  prefix_sum[0] = 0;

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    prefix_sum[i + 1] = prefix_sum[i] + nums[i];
  }

  let max = -Infinity;

  for (let i = k; i <= n; i++) {
    max = Math.max(max, findInnerMaxAverage(nums, i, prefix_sum));
  }

  return max;
};

const findInnerMaxAverage = function (nums, k, prefix_sum) {
  let n = nums.length;
  let max = -Infinity;

  for (let i = 0; i <= n - k; i++) {
    let j = i + k - 1;
    max = Math.max(max, (prefix_sum[j + 1] - prefix_sum[i]) / k);
  }

  return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
