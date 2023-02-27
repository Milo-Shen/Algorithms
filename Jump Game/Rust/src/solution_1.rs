// https://leetcode.cn/problems/jump-game/
// https://www.lintcode.com/problem/116/description

pub fn can_jump(nums: Vec<i32>) -> bool {
    let nums_len = nums.len();

    let mut dp = vec![false; nums_len];
    dp[0] = true;

    for i in 1..nums_len {
        for j in 0..i {
            if dp[j] && j + nums[j] as usize >= i {
                dp[i] = true;
                break;
            }
        }
    }

    dp[nums_len - 1]
}