// https://leetcode.cn/problems/find-median-from-data-stream/

const MedianFinder = function () {
  this.array = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.array.push(num);
  this.array.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.array.length;

  let pos = ~~(len / 2);
  if (len % 2 === 0) {
    return (this.array[pos] + this.array[pos - 1]) / 2;
  } else {
    return this.array[pos];
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
