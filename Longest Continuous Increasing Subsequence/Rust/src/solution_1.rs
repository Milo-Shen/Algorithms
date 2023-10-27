// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
// https://www.lintcode.com/problem/397

pub fn find_length_of_lcis(nums: Vec<i32>) -> i32 {
    let len = nums.len();

    if len == 0 {
        return 0;
    }

    let mut dp = vec![1; len];

    for i in 1..len {
        if nums[i] > nums[i - 1] {
            dp[i] = dp[i - 1] + 1;
        }
    }

    *dp.iter().max().unwrap()
}
