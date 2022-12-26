// https://www.lintcode.com/problem/1246/
// https://leetcode.cn/problems/longest-repeating-character-replacement/

function characterReplacement(s, k) {
  const s_len = s.length;

  if (!s || !s_len) {
    return 0;
  }

  let j = 0;
  let answer = 0;
  let max_freq = 0;
  let counter = new Map();

  for (let i = 0; i < s_len; i++) {
    while (j < s_len && j - i - max_freq <= k) {
      let new_count = (counter.get(s[j]) || 0) + 1;
      counter.set(s[j], new_count);
      max_freq = Math.max(max_freq, new_count);
      j++;
    }

    // update answer
    if (j - i - max_freq > k) {
      answer = Math.max(answer, j - i - 1);
    } else {
      answer = Math.max(answer, j - i);
    }

    counter.set(s[i], counter.get(s[i]) - 1);
    max_freq = Math.max(...[...counter.values()]);
  }

  return answer;
}

console.log(characterReplacement('AABABBA', 1));
