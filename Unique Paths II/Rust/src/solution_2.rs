// https://leetcode.cn/problems/unique-paths-ii/

pub fn unique_paths_with_obstacles(obstacle_grid: Vec<Vec<i32>>) -> i32 {
    if obstacle_grid[0][0] == 1 {
        return 0;
    }

    let m = obstacle_grid.len();
    if m == 0 {
        return 0;
    }

    let n = obstacle_grid[0].len();
    if n == 0 {
        return 0;
    }

    let mut dp = vec![vec![0; n]; m];

    dp[0][0] = 1;

    for i in 1..n {
        if obstacle_grid[0][i] == 1 {
            break;
        }

        dp[0][i] = 1;
    }

    for i in 1..m {
        if obstacle_grid[i][0] == 1 {
            break;
        }

        dp[i][0] = 1;
    }

    for i in 1..m {
        for j in 1..n {
            if obstacle_grid[i][j] == 1 {
                dp[i][j] = 0;
                continue;
            }

            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    dp[m - 1][n - 1]
}