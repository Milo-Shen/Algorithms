// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

// 递归四要素 vs 动规四要素

// 动规的状态State —— 递归的定义
// - 用f[i] 或者f[i][j] 代表在某些特定条件下某个规模更小的问题的答案
// - 规模更小用参数i,j 之类的来划定

// 动规的方程Function —— 递归的拆解
// - 大问题如何拆解为小问题
// - f[i][j] = 通过规模更小的一些状态求max / min / sum / or 来进行推导

// 动规的初始化Initialize —— 递归的出口
// - 设定无法再拆解的极限小的状态下的值
// - 如f[i][0] 或者f[0][i]

// 动规的答案Answer —— 递归的调用
// - 最后要求的答案是什么
// - 如f[n][m] 或者max(f[n][0], f[n][1] ... f[n][m])

// 自底向上进行 dp
const minimumTotal = function (triangle) {
  let n = triangle.length;

  // 初始化 dp
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(triangle[i].length).fill(0));
  }

  // initialize: 初始化终点 ( 最后一层 )
  let last_row_len = triangle[n - 1].length;
  for (let i = 0; i < last_row_len; i++) {
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
