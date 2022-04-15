// https://www.lintcode.com/problem/62/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let nums_len = nums.len() as i32;
    if nums_len == 0 {
        return -1;
    }

    let mut start = 0;
    let mut end = nums_len - 1;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if nums[mid as usize] > nums[end as usize] {
            if nums[start as usize] <= target && target <= nums[mid as usize] {
                end = mid;
            } else {
                start = mid;
            }
        } else {
            if nums[mid as usize] <= target && target <= nums[end as usize] {
                start = mid;
            } else {
                end = mid;
            }
        }
    }

    if nums[start as usize] == target {
        return start;
    }

    if nums[end as usize] == target {
        return end;
    }

    -1
}