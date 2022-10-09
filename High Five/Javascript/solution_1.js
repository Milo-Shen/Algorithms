// https://leetcode.cn/problems/high-five/

const { MinHeap } = require('../../Base/MinHeap/Javascript/MinHeap');

const highFive = function (items) {
  const SUBJECT_NUM = 5;
  const map = new Map();

  for (let i = 0; i < items.length; i++) {
    let [id, score] = items[i];
    let heap = null;

    if (map.has(id)) {
      heap = map.get(id);
    } else {
      heap = new MinHeap();
      map.set(id, heap);
    }

    heap.push(score);
    if (heap.size() > SUBJECT_NUM) {
      heap.pop();
    }
  }

  let result = [];
  for (let [id, heap] of map.entries()) {
    let average = ~~(heap.array.reduce((a, b) => a + b) / 5);
    result.push([id, average]);
  }

  result.sort((a, b) => a[0] - b[0]);
  return result;
};

// test cases
let items = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
console.log(highFive(items));
