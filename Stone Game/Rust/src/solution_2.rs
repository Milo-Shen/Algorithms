pub fn stone_game(a: Vec<i32>) -> i32 {
    let n = a.len();

    if n == 0 {
        return 0;
    }

    let mut prefix_sum = vec![0; n + 1];
    for i in 0..n {
        prefix_sum[i + 1] = prefix_sum[i] + a[i];
    }

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
                dp[i][j] =
                    dp[i][j].min(dp[i][mid] + dp[mid + 1][j] + prefix_sum[j + 1] - prefix_sum[i]);
            }
        }
    }

    dp[0][n - 1]
}
