// https://www.lintcode.com/problem/398
pub fn longest_continuous_increasing_subsequence2(matrix: Vec<Vec<i32>>) -> i32 {
    let rows = matrix.len();

    if rows == 0 {
        return 0;
    }

    let cols = matrix[0].len();

    if cols == 0 {
        return 0;
    }

    let directions = [(1, 0), (-1, 0), (0, 1), (0, -1)];

    let mut dp = Vec::with_capacity(rows);
    for _ in 0..rows {
        dp.push(vec![1; cols]);
    }

    let mut points = Vec::with_capacity(rows);

    for i in 0..rows {
        for j in 0..cols {
            points.push(vec![matrix[i][j], i as i32, j as i32]);
        }
    }

    points.sort_by(|a, b| a[0].partial_cmp(&b[0]).unwrap());

    for point in points {
        for (delta_x, delta_y) in directions {
            let pos_x = point[1];
            let pos_y = point[2];

            let new_x = pos_x + delta_x;
            let new_y = pos_y + delta_y;

            if new_x < 0 || new_x >= rows as i32 || new_y < 0 || new_y >= cols as i32 {
                continue;
            }

            if matrix[pos_x as usize][pos_y as usize] > matrix[new_x as usize][new_y as usize] {
                dp[pos_x as usize][pos_y as usize] =
                    dp[pos_x as usize][pos_y as usize].max(dp[new_x as usize][new_y as usize] + 1);
            }
        }
    }

    let mut max = 1;

    for i in 0..rows {
        for j in 0..cols {
            max = max.max(dp[i][j]);
        }
    }

    max
}
