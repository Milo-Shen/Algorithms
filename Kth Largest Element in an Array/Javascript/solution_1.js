// https://leetcode.cn/problems/kth-largest-element-in-an-array/

const findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
