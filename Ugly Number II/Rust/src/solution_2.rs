// https://leetcode.cn/problems/ugly-number-ii/

use std::cmp::min;

pub fn nth_ugly_number(n: i32) -> i32 {
    // 特殊情况处理
    if n < 0 {
        return -1;
    }

    // 初始化数列
    let mut dp = Vec::with_capacity(n as usize);
    for _ in 0..n {
        dp.push(0);
    }

    dp[0] = 1;

    // 三个指针，分别指向可以下一个乘以 2, 3, 5 的数
    let mut l2 = 0;
    let mut l3 = 0;
    let mut l5 = 0;

    for i in 1..n as usize {
        // 生成下一个丑数，第 i + 1 个丑数
        dp[i] = min(min(dp[l2] * 2, dp[l3] * 3), dp[l5] * 5);

        // 如果丑数是由某个指针指向的数生成的，则这个指针可以后移
        if dp[i] == dp[l2] * 2 {
            l2 = l2 + 1;
        }

        if dp[i] == dp[l3] * 3 {
            l3 = l3 + 1;
        }

        if dp[i] == dp[l5] * 5 {
            l5 = l5 + 1;
        }
    }

    dp[n as usize - 1]
}