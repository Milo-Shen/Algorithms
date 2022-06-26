// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
  // 异常检测
  let s_len = s.length;

  // 存储结果
  let result = 0;
  let heap = {};

  let j = 0;
  for (let i = 0; i < s_len; i++) {
    heap[s[i]] = (heap[s[i]] || 0) + 1;

    while (heap[s[i]] > 1) {
      heap[s[j++]]--;
    }

    result = Math.max(result, i - j + 1);
  }

  return result;
}

// test cases
let s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
