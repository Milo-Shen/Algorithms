// https://www.lintcode.com/problem/31/

pub fn partition_array(nums: Vec<i32>, k: i32) -> i32 {
    let mut nums = nums;
    let nums_len = nums.len();
    if nums_len == 0 {
        return 0;
    }

    let mut left = 0;
    let mut right = (nums_len - 1) as i32;

    while left <= right {
        while left <= right && nums[left as usize] < k {
            left = left + 1;
        }

        while left <= right && nums[right as usize] >= k {
            right = right - 1;
        }

        if left <= right {
            let temp = nums[left as usize];
            nums[left as usize] = nums[right as usize];
            nums[right as usize] = temp;
            left = left + 1;
            right = right - 1;
        }
    }

    left
}