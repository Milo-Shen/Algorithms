// https://leetcode.cn/problems/third-maximum-number/

const thirdMax = function (nums) {
  nums = [...new Set(nums)];

  if (nums.length < 3) {
    return Math.max(...nums);
  }

  return nums.sort((a, b) => b - a)[2];
};

console.log(thirdMax([2, 2, 3, 1]));
