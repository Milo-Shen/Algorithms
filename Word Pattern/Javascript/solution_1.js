// https://leetcode.cn/problems/word-pattern-ii/

const wordPatternMatch = function (pattern, s) {
  const s_arr = s.split(' ');
  // 特殊情况处理
  if (pattern.length !== s_arr.length) {
    return false;
  }

  let map_a = new Map();
  let map_b = new Map();

  let isMatch = true;
  for (let i = 0; i < pattern.length; i++) {
    let pat = pattern[i];
    let flag = map_a.get(pat);

    if (!flag) {
      map_a.set(pat, s_arr[i]);
    } else if (flag !== s_arr[i]) {
      isMatch = false;
    }

    let word = s_arr[i];
    let flag_word = map_b.get(word);

    if (!flag_word) {
      map_b.set(word, pattern[i]);
    } else if (flag_word !== pattern[i]) {
      isMatch = false;
    }
  }

  return isMatch;
};

console.log(wordPatternMatch('abba', 'dog cat cat dog'));
