// https://leetcode.cn/problems/k-closest-points-to-origin/
// https://www.lintcode.com/problem/612

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

const kClosest = function (points, k) {
  let output = [];
  let heap = new MinHeap((a, b) => {
    let pow1 = Math.pow(a[0], 2) + Math.pow(a[1], 2);
    let pow2 = Math.pow(b[0], 2) + Math.pow(b[1], 2);
    return pow1 - pow2;
  });

  for (let i = 0; i < points.length; i++) {
    heap.push(points[i]);
  }

  for (let i = 0; i < k; i++) {
    output.push(heap.pop());
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
