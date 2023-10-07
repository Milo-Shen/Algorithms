const minDistance = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;

  let dp = [];
  for (let i = 0; i <= 2; i++) {
    dp.push(Array(m + 1).fill(0));
  }

  for (let i = 0; i <= n; i++) {
    dp[i % 2][0] = i;
  }

  for (let i = 0; i <= m; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= n; i++) {
    dp[i % 2][0] = i;

    for (let j = 1; j <= m; j++) {
      let diff = word1[i - 1] === word2[j - 1] ? 0 : 1;
      dp[i % 2][j] = Math.min(
        dp[(i - 1) % 2][j] + 1,
        dp[i % 2][j - 1] + 1,
        dp[(i - 1) % 2][j - 1] + diff,
      );
    }
  }

  return dp[n % 2][m];
};

console.log(minDistance('horse', 'ros'));
