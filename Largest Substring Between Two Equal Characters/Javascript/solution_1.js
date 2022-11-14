// https://leetcode.cn/problems/largest-substring-between-two-equal-characters/

const maxLengthBetweenEqualCharacters = function (s) {
  let map = new Map();
  let max = -1;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (map.has(ch)) {
      let len = i - map.get(ch) - 1;
      max = Math.max(len, max);
    } else {
      map.set(ch, i);
    }
  }

  return max;
};

console.log(maxLengthBetweenEqualCharacters('cabbac'));
