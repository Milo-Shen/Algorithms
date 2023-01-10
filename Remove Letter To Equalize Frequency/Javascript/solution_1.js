// https://leetcode.cn/problems/remove-letter-to-equalize-frequency/

/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function (word) {
  const map = new Map();

  for (const c of word) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  const arr = [];

  for (const [_, v] of map) {
    arr.push(v);
  }

  if (arr.length === 1) {
    return true;
  }

  arr.sort((a, b) => b - a);

  if (arr.length === 2) {
    return arr[0] - arr[1] === 1 || arr[1] === 1;
  }

  if (arr[0] === arr[arr.length - 1] && arr[0] === 1) {
    return true;
  }

  if (arr[0] - arr[1] === 1 && arr[1] === arr[arr.length - 1]) {
    return true;
  }

  return arr[arr.length - 1] === 1 && arr[0] === arr[arr.length - 2];
};

console.log(equalFrequency('abcc'));
