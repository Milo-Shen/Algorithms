// https://leetcode.cn/problems/kth-largest-element-in-a-stream/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  this.heap = new MinHeap();
  this.k = k;

  for (let i = 0; i < nums.length; i++) {
    this.heap.push(nums[i]);
    if (this.heap.size() > this.k) {
      this.heap.pop();
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  if (this.heap.size() > this.k) {
    this.heap.pop();
  }

  return this.heap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8
