// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

// 自顶向下 dp
const minimumTotal = function (triangle) {
  let n = triangle.length;

  // 初始化 dp
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(triangle[i].length).fill(0));
  }

  // initialize: 初始化左右两条边
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }

  // dp 从上往下推导，计算每个坐标往哪来
  for (let i = 2; i < n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  return Math.min(...dp[n - 1]);
};

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
