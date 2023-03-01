// https://leetcode.cn/problems/jump-game-ii/

// dp[i] 记为到达位置i的最小跳数
// dp[i] = min{dp[i-1], dp[i-2],...} + 1 条件是 dp[i-1], dp[i-2]...能到 dp[i]
// 反过来 dp[i] 跳一次距离可以到达的位置为 i + ( 0 ~ nums[i] ) 中记为 m 若 dp[m] > dp[i]+1 则更新 dp[m]

pub fn jump(nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();

    let mut dp = vec![i32::MAX - 1; nums_len];
    dp[0] = 0;

    for i in 0..nums_len {
        for j in 1..=nums[i] as usize {
            if i + j < nums_len && dp[i + j] > dp[i] + 1 {
                dp[i + j] = dp[i] + 1;
            }
        }
    }

    dp[nums_len - 1]
}