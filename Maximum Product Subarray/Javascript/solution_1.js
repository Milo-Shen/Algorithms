// https://leetcode.cn/problems/maximum-product-subarray/

// todo
const maxProduct = function (nums) {
  let len = nums.length;

  let prefix_product = Array(len + 1).fill(1);

  for (let i = 1; i < len + 1; i++) {
    prefix_product[i] = prefix_product[i - 1] * nums[i - 1];
  }

  let max = -Infinity;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let value = nums[j];

      if (i !== j) {
        value = prefix_product[j + 1] / (prefix_product[i] || 1);
      }

      max = Math.max(max, value);
    }
  }

  return max;
};

console.log(maxProduct([0, 2]));
