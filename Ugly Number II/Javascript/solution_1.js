// https://leetcode.cn/problems/ugly-number-ii/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

const nthUglyNumber = function (n) {
  const factors = [2, 3, 5];
  const heap = new MinHeap();
  const set = new Set();

  heap.push(1);
  set.add(1);

  let cur_ugly = 1;
  let new_ugly = 0;

  for (let i = 0; i < n; i++) {
    cur_ugly = heap.pop();
    for (let factor of factors) {
      new_ugly = cur_ugly * factor;
      if (!set.has(new_ugly)) {
        heap.push(new_ugly);
        set.add(new_ugly);
      }
    }
  }

  return cur_ugly;
};

console.log(nthUglyNumber(10));
