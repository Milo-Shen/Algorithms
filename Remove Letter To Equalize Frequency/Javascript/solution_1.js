// https://leetcode.cn/problems/remove-letter-to-equalize-frequency/

const equalFrequency = function (word) {
  let map = new Map();

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  let count_arr = [];
  for (let [_, count] of map) {
    count_arr.push(count);
  }

  count_arr.sort((a, b) => b - a);
  console.log(count_arr);

  return count_arr[0] - count_arr[count_arr.length - 1] <= 1;

  // 4 2 1,   2 2 1 todo
};

console.log(equalFrequency('babbdd'));
