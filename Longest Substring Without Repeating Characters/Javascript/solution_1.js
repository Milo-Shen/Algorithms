// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

// 采用最基础的暴力解法
function lengthOfLongestSubstring(s) {
  // 异常检测
  let s_len = s.length;
  if (!s || !s_len) {
    return 0;
  }

  // 最长子串的长度
  let max_len = 0;

  for (let i = 0; i < s_len; i++) {
    for (let j = 0; j < s_len; j++) {
      let visited = new Set();
      let len = 0;
      for (let k = i; k <= j; k++) {
        let char = s[k];
        if (visited.has(char)) {
          break;
        }
        visited.add(char);
        len++;
      }
      max_len = Math.max(max_len, len);
    }
  }

  return max_len;
}

// test cases
let s = ' ';
console.log(lengthOfLongestSubstring(s));
