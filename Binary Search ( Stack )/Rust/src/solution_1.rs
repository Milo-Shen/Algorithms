// https://leetcode-cn.com/problems/binary-search/
// https://www.lintcode.com/problem/457/

pub fn find_position(nums: Vec<i32>, target: i32) -> i32 {
    return binary_search(&nums, 0, (nums.len() - 1) as i32, target);
}

fn binary_search(nums: &Vec<i32>, start: i32, end: i32, target: i32) -> i32 {
    if start > end {
        return -1;
    }

    let middle = (start + end) / 2;
    let middle_value = nums[middle as usize];

    if target == middle_value {
        return middle;
    }

    if target < middle_value {
        return binary_search(nums, start, middle - 1, target);
    }

    return binary_search(nums, middle + 1, end, target);
}