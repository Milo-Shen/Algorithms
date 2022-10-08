// https://leetcode.cn/problems/top-k-frequent-elements/

const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const topKFrequent = function (nums, k) {
  let map = new Map();
  let heap = new MaxHeap((a, b) => a[1] - b[1]);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let list = [...map];

  for (let i = 0; i < list.length; i++) {
    heap.push(list[i]);
  }

  for (let i = 0; i < k; i++) {
    let value = heap.pop();
    if (value) {
      result.push(value[0]);
    }
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
