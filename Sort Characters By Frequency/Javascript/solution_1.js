// https://leetcode.cn/problems/sort-characters-by-frequency/

const { MaxHeap } = require('../../Base/MaxHeap/Javascript/MaxHeap');

const frequencySort = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  let heap = new MaxHeap((a, b) => a[1] - b[1]);
  for (let i of map.entries()) {
    heap.push(i);
  }

  let output = '';
  while (!heap.isEmpty()) {
    let [char, freq] = heap.pop();
    for (let i = 0; i < freq; i++) {
      output += char;
    }
  }

  return output;
};

console.log(frequencySort('tree'));
