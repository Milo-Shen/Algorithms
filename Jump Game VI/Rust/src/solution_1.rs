// https://leetcode.cn/problems/jump-game-vi/

use std::cmp::{min, max};

pub fn max_result(nums: Vec<i32>, k: i32) -> i32 {
    let len = nums.len();

    let mut dp = vec![i32::MIN; len];
    dp[0] = nums[0];

    for i in 0..len - 1 {
        for j in i + 1..=min(len - 1, i + k as usize) {
            dp[j] = max(dp[j], dp[i] + nums[j]);

            if dp[j] >= dp[i] {
                break;
            }
        }
    }
    
    dp[len - 1]
}