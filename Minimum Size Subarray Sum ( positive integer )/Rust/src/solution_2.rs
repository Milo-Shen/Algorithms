// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();

    // 异常处理
    if nums_len == 0 {
        return 0;
    }

    let mut min_len = i32::MAX;
    let prefix_sum_arr = prefix_sum(&nums);

    for start in 0..nums_len {
        let end = find_end_pos(&prefix_sum_arr, start, target);
        if prefix_sum_arr[end + 1] - prefix_sum_arr[start] >= target {
            let len = (end - start + 1) as i32;
            min_len = if min_len > len { len } else { min_len }
        }
    }

    if min_len == i32::MAX { 0 } else { min_len }
}

fn find_end_pos(prefix_sum: &Vec<i32>, start: usize, target: i32) -> usize {
    let mut left = start;
    let mut right = prefix_sum.len() - 2;

    while left + 1 < right {
        let mid = left + (right - left) / 2;
        if prefix_sum[mid + 1] - prefix_sum[start] >= target {
            right = mid;
        } else {
            left = mid;
        }
    }

    if prefix_sum[left + 1] - prefix_sum[start] >= target {
        return left;
    }

    right
}

fn prefix_sum(nums: &Vec<i32>) -> Vec<i32> {
    let nums_len = nums.len();
    let mut prefix_sum_arr: Vec<i32> = Vec::with_capacity(nums_len + 1);
    prefix_sum_arr.push(0);

    for i in 0..nums_len {
        let sum = prefix_sum_arr[i] + nums[i];
        prefix_sum_arr.push(sum);
    }

    prefix_sum_arr
}