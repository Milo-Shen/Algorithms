// https://leetcode.cn/problems/word-break/
const wordBreak = function (s, wordDict) {
  if (!s || !wordDict || !wordDict.length) {
    return false;
  }

  let word_set = new Set();
  let max_len = 0;
  for (let word of wordDict) {
    word_set.add(word);
    max_len = Math.max(max_len, word.length);
  }

  let n = s.length;
  let dp = Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let l = 1; l <= max_len; l++) {
      if (i < l) {
        break;
      }

      if (!dp[i - l]) {
        continue;
      }

      if (word_set.has(s.slice(i - l, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
