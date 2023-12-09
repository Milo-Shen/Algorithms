// https://leetcode.cn/problems/product-of-array-except-self/description/

const productExceptSelf = function (nums) {
  let len = nums.length;
  let answer = Array(len).fill(0);
  answer[0] = 1;

  for (let i = 1; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let r = 1;
  for (let i = len - 2; i >= 0; i--) {
    r = r * nums[i + 1];
    answer[i] *= r;
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
