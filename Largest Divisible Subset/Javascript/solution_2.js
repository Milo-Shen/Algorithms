// https://leetcode.cn/problems/largest-divisible-subset/
// https://www.lintcode.com/problem/603

const largestDivisibleSubset = function (nums) {
  if (!nums || !nums.length) {
    return nums;
  }

  let len = nums.length;
  let dp = Array(len).fill(1);
  let prev = Array(len).fill(-1);
};

console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]));
