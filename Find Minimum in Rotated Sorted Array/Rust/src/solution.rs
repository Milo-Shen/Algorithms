use std::cmp::min;

pub fn find_min(nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();
    if nums_len == 0 {
        return -1;
    }

    let mut start = 0;
    let mut end = (nums_len - 1) as i32;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if nums[mid as usize] >= nums[end as usize] {
            start = mid;
        } else {
            end = mid;
        }
    }

    min(nums[start as usize], nums[end as usize])
}