// https://www.lintcode.com/problem/1844/

pub fn subarray_sum_equals_k_i_i(nums: Vec<i32>, k: i32) -> i32 {
    let nums_len = nums.len();
    let mut min_len = i32::MAX;
    let prefix_sum_arr = prefix_sum(&nums);

    for i in 0..nums_len {
        for j in i..nums_len {
            let sum = prefix_sum_arr[j + 1] - prefix_sum_arr[i];
            if sum == k {
                let len = (j - i + 1) as i32;
                if min_len > len {
                    min_len = len;
                }
            }
        }
    }

    if min_len == i32::MAX { -1 } else { min_len }
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