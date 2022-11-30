pub fn max_increase_keeping_skyline(grid: Vec<Vec<i32>>) -> i32 {
    let n = grid.len();
    let mut row = vec![0; n];
    let mut col = vec![0; n];

    for i in 0..n {
        for j in 0..n {
            row[i] = row[i].max(grid[i][j]);
            col[j] = col[j].max(grid[i][j]);
        }
    }

    let mut ans = 0;

    for i in 0..n {
        for j in 0..n {
            ans += row[i].min(col[j]) - grid[i][j];
        }
    }

    ans
}