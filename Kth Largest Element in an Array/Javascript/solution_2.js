// https://leetcode.cn/problems/kth-largest-element-in-an-array/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

const findKthLargest = function (nums, k) {
  const heap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  return heap.pop();
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
