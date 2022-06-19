// https://leetcode.cn/problems/longest-common-prefix/

function longestCommonPrefix(strs) {
  let str_len = strs.length;
  let result = '';
  if (!strs || !str_len) {
    return result;
  }

  // 获取单词的最大长度
  let max_str_len = Infinity;
  for (let i = 0; i < str_len; i++) {
    let len = strs[i].length;
    max_str_len = max_str_len > len ? len : max_str_len;
  }

  if (!max_str_len) {
    return result;
  }

  for (let i = 0; i < max_str_len; i++) {
    let prefix = strs[0][i];
    let is_same = true;
    for (let j = 0; j < str_len; j++) {
      if (strs[j][i] !== prefix) {
        is_same = false;
        return result;
      }
    }
    if (is_same) {
      result += prefix;
    }
  }

  return result;
}

// test cases
let strs = ['cir', 'car'];
console.log(longestCommonPrefix(strs));
