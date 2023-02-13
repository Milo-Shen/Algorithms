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

    // initialize: 初始化左右两条边
    dp[0][0] = triangle[0][0];
    for i in 1..n {
        dp[i][0] = dp[i - 1][0] + triangle[i][0];
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    }

    // dp 从上往下推导，计算每个坐标往哪来
    for i in 2..n {
        for j in 1..i {
            dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
        }
    }

    *dp[n - 1].iter().min().unwrap()
}