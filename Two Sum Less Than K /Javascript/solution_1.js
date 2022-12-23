// https://leetcode.cn/problems/two-sum-less-than-k/

const twoSumLessThanK = function (nums, k) {
  nums = nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;
  let max = -Infinity;

  while (l < r) {
    if (nums[l] + nums[r] >= k) {
      r--;
    } else {
      max = Math.max(max, nums[l] + nums[r]);
      l++;
    }
  }

  return max === -Infinity ? -1 : max;
};

console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60));
