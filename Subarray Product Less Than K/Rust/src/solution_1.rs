// https://leetcode.cn/problems/subarray-product-less-than-k/submissions/

pub fn num_subarray_product_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
    let nums_len = nums.len();
    let mut total = 0;

    for i in 0..nums_len {
        let mut j = i + 1;
        let mut sum = nums[i];

        if sum >= k {
            continue;
        }

        while j < nums_len {
            sum *= nums[j];

            if sum >= k {
                break;
            }

            j += 1;
        }

        total += j - i;
    }

    total as i32
}