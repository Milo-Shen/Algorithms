// https://www.lintcode.com/problem/265
// https://www.lintcode.com/problem/41

const maxNonNegativeSubArray = function (nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  let prefix_sum = [];
  prefix_sum[0] = 0;

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    prefix_sum[i + 1] = prefix_sum[i] + nums[i];
  }

  let longest = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      longest = Math.max(longest, prefix_sum[j + 1] - prefix_sum[i]);
    }
  }

  return longest;
};

console.log(maxNonNegativeSubArray([1, 2, -3, 4, 5, -6]));
