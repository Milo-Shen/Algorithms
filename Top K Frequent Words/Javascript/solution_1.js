// https://leetcode.cn/problems/top-k-frequent-words/

const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];

  let heap = new MaxHeap((a, b) => {
    let diff = a[1] - b[1];
    let dictionary_sequence = a[0] < b[0] ? 1 : -1;
    return diff !== 0 ? diff : dictionary_sequence;
  });

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

let words = ['i', 'love', 'i', 'love'];
console.log(topKFrequent(words, 2));
