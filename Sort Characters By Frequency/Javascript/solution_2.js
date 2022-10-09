// https://leetcode.cn/problems/sort-characters-by-frequency/

const frequencySort = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  let list = [...map];
  list.sort((a, b) => b[1] - a[1]);

  let output = '';
  for (let i = 0; i < list.length; i++) {
    let [char, freq] = list[i];
    for (let j = 0; j < freq; j++) {
      output += char;
    }
  }

  return output;
};

console.log(frequencySort('tree'));
