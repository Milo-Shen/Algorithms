// https://leetcode.cn/problems/2VG8Kg/
// https://www.lintcode.com/problem/406

pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();

    // 异常处理
    if nums_len == 0 {
        return 0;
    }

    let mut min_len = i32::MAX;

    let mut end = 0;
    let mut subarray_sum = 0;

    for start in 0..nums_len {
        while end < nums_len && subarray_sum < target {
            subarray_sum = subarray_sum + nums[end];
            end = end + 1;
        }

        if subarray_sum >= target {
            let len = (end - start) as i32;
            min_len = if min_len > len { len } else { min_len }
        }

        subarray_sum = subarray_sum - nums[start];
    }

    if min_len == i32::MAX { 0 } else { min_len }
}