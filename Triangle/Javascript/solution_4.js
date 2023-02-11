// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

// 自底向上进行 dp
const minimumTotal = function (triangle) {
  let n = triangle.length;

  // 初始化 dp
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(triangle[i].length).fill(0));
  }

  // initialize: 初始化终点 ( 最后一层 )
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  // dp 从下往上推导, 计算每个坐标到哪去
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < i + 1; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
};

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
