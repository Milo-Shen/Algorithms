// https://leetcode.cn/problems/k-closest-points-to-origin/
// https://www.lintcode.com/problem/612

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

const kClosest = function (points, k) {
  let output = [];
  let map = new Map();
  let heap = new MinHeap();

  for (let i = 0; i < points.length; i++) {
    let distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
    heap.push(distance);
    map.set(distance, points[i]);
  }

  for (let i = 0; i < k; i++) {
    output.push(map.get(heap.pop()));
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
