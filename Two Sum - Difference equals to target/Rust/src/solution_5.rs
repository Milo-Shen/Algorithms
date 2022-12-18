// https://www.lintcode.com/problem/610/

use std::cmp::max;

pub fn two_sum7(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let nums_len = nums.len();
    let target = target.abs();
    let mut result = vec![];

    let mut j = 1;

    for i in 0..nums_len {
        j = max(j, i + 1);

        while nums[j] - nums[i] < target {
            j += 1;
        }

        if j >= nums_len {
            break;
        }

        if nums[j] - nums[i] == target {
            return vec![nums[i], nums[j]];
        }
    }

    result
}