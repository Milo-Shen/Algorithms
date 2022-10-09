// https://leetcode.cn/problems/find-median-from-data-stream/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');
const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const MedianFinder = function () {
  this.min_heap = new MinHeap();
  this.max_heap = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.max_heap.push(num);
  this.min_heap.push(this.max_heap.pop());
  if (this.min_heap.size() > this.max_heap.size()) {
    this.max_heap.push(this.min_heap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.min_heap.size() === this.max_heap.size()) {
    return (this.min_heap.peek() + this.max_heap.peek()) / 2;
  } else {
    return this.max_heap.peek();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const median = new MedianFinder();
median.addNum(1);
median.addNum(2);
median.addNum(3);
median.addNum(4);
median.addNum(5);
median.addNum(6);
median.addNum(7);
median.addNum(8);
median.addNum(9);
median.addNum(10);
console.log(median.findMedian());
