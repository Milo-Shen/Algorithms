pub fn stone_game(a: Vec<i32>) -> i32 {
    let n = a.len();

    if n == 0 {
        return 0;
    }

    let mut range_sum = get_range_sum(&a);

    let mut dp = Vec::with_capacity(n);
    for _ in 0..n {
        dp.push(vec![i32::MAX; n]);
    }

    for i in 0..n {
        dp[i][i] = 0;
    }

    for len in 2..=n {
        for i in 0..(n - len + 1) {
            let j = i + len - 1;
            for mid in i..j {
                dp[i][j] = dp[i][j].min(dp[i][mid] + dp[mid + 1][j] + range_sum[i][j]);
            }
        }
    }

    dp[0][n - 1]
}

fn get_range_sum(a: &Vec<i32>) -> Vec<Vec<i32>> {
    let n = a.len();
    let mut range_sum = Vec::with_capacity(n);

    for _ in 0..n {
        range_sum.push(vec![0; n]);
    }

    for i in 0..n {
        range_sum[i][i] = a[i];
    }

    for i in 0..n {
        for j in (i + 1)..n {
            range_sum[i][j] = range_sum[i][j - 1] + a[j];
        }
    }

    range_sum
}
