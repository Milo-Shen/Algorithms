// https://leetcode.cn/problems/k-closest-points-to-origin/
// https://www.lintcode.com/problem/612

const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const kClosest = function (points, k) {
  let output = [];
  let heap = new MaxHeap((a, b) => {
    let pow1 = Math.pow(a[0], 2) + Math.pow(a[1], 2);
    let pow2 = Math.pow(b[0], 2) + Math.pow(b[1], 2);
    return pow1 - pow2;
  });

  for (let i = 0; i < points.length; i++) {
    heap.push(points[i]);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  let len = heap.size();
  while (heap.size()) {
    output[--len] = heap.pop();
  }

  return output;
};

// test cases
let points = [
  [1, 3],
  [-2, 2],
];
let k = 1;
console.log(kClosest(points, k));
