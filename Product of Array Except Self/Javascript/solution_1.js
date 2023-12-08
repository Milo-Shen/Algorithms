// https://leetcode.cn/problems/product-of-array-except-self/description/

const productExceptSelf = function (nums) {
  let result = [];

  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let ans = 1;

    for (let j = 0; j < len; j++) {
      if (i !== j) {
        ans *= nums[j];
      }
    }

    result.push(ans);
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
