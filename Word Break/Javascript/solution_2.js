// https://leetcode.cn/problems/word-break/
const wordBreak = function (s, wordDict) {
  if (!s || !wordDict || !wordDict.length) {
    return false;
  }

  let word_set = new Set();
  for (let word of wordDict) {
    word_set.add(word);
  }

  let n = s.length;
  let dp = Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = dp[i] || (dp[j] && word_set.has(s.slice(j, i)));
    }
  }

  return dp[n];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
