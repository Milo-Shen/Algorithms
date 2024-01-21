// https://leetcode.cn/problems/largest-divisible-subset/
// https://www.lintcode.com/problem/603

const largestDivisibleSubset = function (nums) {
  if (!nums || !nums.length) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  let len = nums.length;
  let last = 0;
  let dp = new Map();
  let prev = new Map();

  return answer;
};

console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]));
