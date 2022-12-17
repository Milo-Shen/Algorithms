// https://www.lintcode.com/problem/610/

pub fn two_sum7(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let nums_len = nums.len();
    let mut result = vec![];

    for i in 0..nums_len {
        let num1 = nums[i];
        let num2 = num1 + target.abs();
        if binary_search(&nums, num2, (i + 1) as i32) != -1 {
            return vec![num1, num2];
        }
    }

    result
}

pub fn binary_search(nums: &Vec<i32>, target: i32, start: i32) -> i32 {
    // 对数组进行空值检查
    let nums_len = nums.len();
    if nums_len == 0 {
        return -1;
    }

    let mut start = start;
    let mut end = (nums_len - 1) as i32;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        let mid_val = nums[mid as usize];

        if mid_val == target {
            end = mid;
        } else if mid_val > target {
            end = mid
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

    return -1;
}