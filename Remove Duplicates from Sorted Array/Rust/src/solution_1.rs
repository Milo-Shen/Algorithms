// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// https://www.lintcode.com/problem/521/description

use std::cmp::max;

pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut pos = 0;
    let mut j = 1;
    let nums_len = nums.len();

    for i in 0..nums_len {
        j = max(i + 1, j);

        while j < nums_len && nums[i] == nums[j] {
            j += 1;
        }

        if j >= nums_len {
            break;
        }

        nums[i + 1] = nums[j];
        pos = i + 1;
    }

    pos as i32 + 1
}