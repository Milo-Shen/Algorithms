// https://leetcode.cn/problems/unique-paths/
// https://www.lintcode.com/problem/114/

pub fn unique_paths(m: i32, n: i32) -> i32 {
    let m = m as usize;
    let n = n as usize;
    let mut dp = vec![vec![0; n]; m];

    for i in 0..n {
        dp[m - 1][i] = 1;
    }

    for i in 0..m {
        dp[i][n - 1] = 1;
    }

    for i in (0..m - 1).rev() {
        for j in (0..n - 1).rev() {
            dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
        }
    }

    dp[0][0]
}