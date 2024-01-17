// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

const minimumTotal = function (triangle) {
  let n = triangle.length;

  let dp = [];
  for (let i = 0; i < 2; i++) {
    dp.push(Array(n).fill(0));
  }

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    dp[i % 2][0] = dp[(i - 1) % 2][0] + triangle[i][0];
    dp[i % 2][i] = dp[(i - 1) % 2][i - 1] + triangle[i][i];

    for (let j = 1; j < i; j++) {
      dp[i % 2][j] = Math.min(dp[(i - 1) % 2][j], dp[(i - 1) % 2][j - 1]) + triangle[i][j];
    }
  }

  return Math.min(...dp[(n - 1) % 2]);
};

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
