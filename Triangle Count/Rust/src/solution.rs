// https://www.lintcode.com/problem/382/
// https://leetcode-cn.com/problems/valid-triangle-number/

pub fn triangle_number(nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();
    if nums_len < 3 {
        return 0;
    }

    let mut nums = nums;
    nums.sort();

    let mut total = 0;
    for i in 2..nums_len {
        total = total + get_triangle_count(&nums, i as i32);
    }

    total
}

fn get_triangle_count(nums: &Vec<i32>, i: i32) -> i32 {
    let mut left = 0;
    let mut right = i - 1;
    let target = nums[i as usize];
    let mut total = 0;

    while left < right {
        let sum = nums[left as usize] + nums[right as usize];
        if sum > target {
            total = total + right - left;
            right = right - 1;
        } else {
            left = left + 1;
        }
    }

    total
}