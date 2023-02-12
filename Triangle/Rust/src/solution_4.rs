// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

use std::cmp::min;

pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
    let n = triangle.len();

    // 初始化 dp
    let mut dp = vec![];
    for i in 0..n {
        dp.push(vec![0; i + 1]);
    }

    // initialize: 初始化终点 ( 最后一层 )
    for i in 0..n {
        dp[n - 1][i] = triangle[n - 1][i]
    }

    // dp 从下往上推导, 计算每个坐标到哪去
    for i in (0..n - 1).rev() {
        for j in 0..(i + 1) {
            dp[i][j] = min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
        }
    }

    dp[0][0]
}