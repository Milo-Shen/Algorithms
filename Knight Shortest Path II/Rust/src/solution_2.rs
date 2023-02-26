// https://www.lintcode.com/problem/630
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意
// 另外一个则是 grid 是 boolean 数组，而非 0, 1 数组，和题目介绍不一样

use std::cmp::min;

pub fn shortest_path2(grid: Vec<Vec<bool>>) -> i32 {
    // 对异常进行处理
    let rows = grid.len();
    if rows == 0 {
        return -1;
    }

    let cols = grid[0].len();
    if cols == 0 {
        return -1;
    }

    // 往左走的 4 个方向
    let backward_directions: [(i32, i32); 4] = [
        (1, -2),
        (-1, -2),
        (2, -1),
        (-2, -1),
    ];

    let mut dp = vec![vec![i32::MAX; cols]; rows];

    dp[0][0] = 0;

    // 重点: 因为之前 4 个位置的点都在当前点的左侧，所以要按照列来遍历
    for j in 0..cols {
        for i in 0..rows {
            if grid[i][j] {
                continue;
            }

            // 遍历到达 dp[i][j] 这个点的可能的 4 个方向
            for delta in backward_directions {
                let come_x = i as i32 + delta.0;
                let come_y = j as i32 + delta.1;

                if 0 <= come_x && come_x < rows as i32 && 0 <= come_y && come_y < cols as i32 {
                    if dp[come_x as usize][come_y as usize] == i32::MAX {
                        continue;
                    }

                    dp[i][j] = min(dp[i][j], dp[come_x as usize][come_y as usize] + 1);
                }
            }
        }
    }

    if dp[rows - 1][cols - 1] == i32::MAX {
        return -1;
    }

    dp[rows - 1][cols - 1]
}
