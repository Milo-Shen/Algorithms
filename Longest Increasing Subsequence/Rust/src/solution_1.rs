pub fn length_of_lis(nums: Vec<i32>) -> i32 {
    let len = nums.len();

    if len == 0 {
        return 0;
    }

    let mut dp = vec![1; len];

    for i in 0..len {
        for j in 0..i {
            if nums[i] > nums[j] {
                dp[i] = dp[i].max(dp[j] + 1);
            }
        }
    }

    let mut longest = 1;

    for &i in &dp {
        longest = longest.max(i);
    }

    longest as i32
}
