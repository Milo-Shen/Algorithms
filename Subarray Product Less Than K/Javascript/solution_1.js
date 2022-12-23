// https://leetcode.cn/problems/subarray-product-less-than-k/submissions/

// todo
const numSubarrayProductLessThanK = function (nums, k) {
  let j = 1;
  let nums_len = nums.length;
  let total = 0;

  for (let i = 0; i < nums_len; i++) {
    j = Math.max(i + 1, j);
    let sum = nums[i];

    if (sum >= k) {
      continue;
    }

    while (j < nums_len) {
      sum *= nums[j];

      if (sum >= k) {
        break;
      }

      j++;
    }

    total += j - i;
  }

  return total;
};

console.log(numSubarrayProductLessThanK([10, 2, 2, 5, 4, 4, 4, 3, 7, 7], 289));
