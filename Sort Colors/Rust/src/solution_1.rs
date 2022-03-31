// https://leetcode-cn.com/problems/sort-colors/submissions/
// https://www.lintcode.com/problem/148/description

pub fn solution(nums: &mut Vec<i32>) {
    let mut left = 0;
    let mut middle = 0;
    let mut right = (nums.len() - 1) as i32;

    while middle <= right {
        if nums[middle as usize] == 0 {
            swap(nums, middle as usize, left);
            left = left + 1;
            middle = middle + 1;
        } else if nums[middle as usize] == 2 {
            swap(nums, middle as usize, right as usize);
            right = right - 1;
        } else {
            middle = middle + 1;
        }
    }
}

fn swap(nums: &mut Vec<i32>, left: usize, right: usize) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}