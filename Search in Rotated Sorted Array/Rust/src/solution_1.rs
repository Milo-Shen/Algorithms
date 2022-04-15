// https://www.lintcode.com/problem/62/
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let nums_len = nums.len() as i32;
    if nums_len == 0 {
        return -1;
    }

    let min = find_min_pos(&nums);
    let is_in_right = nums[min as usize] <= target && target <= nums[(nums_len - 1) as usize];
    let left = if is_in_right { min } else { 0 };
    let right = if is_in_right { nums_len - 1 } else { if min - 1 < 0 { min } else { min - 1 } };
    binary_search(&nums, left, right, target)
}

fn find_min_pos(nums: &Vec<i32>) -> i32 {
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

    if nums[start as usize] > nums[end as usize] { end } else { start }
}

fn binary_search(nums: &Vec<i32>, left: i32, right: i32, target: i32) -> i32 {
    let nums_len = nums.len();
    if nums_len == 0 {
        return -1;
    }

    let mut start = left;
    let mut end = right;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if nums[mid as usize] >= target {
            end = mid;
        } else {
            start = mid;
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