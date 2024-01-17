// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

const minimumTotal = function (triangle) {
  let n = triangle.length;

  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(n).fill(0));
  }

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];

    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
  }

  return Math.min(...dp[n - 1]);
};

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
