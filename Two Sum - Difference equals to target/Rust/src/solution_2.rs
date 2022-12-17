// https://www.lintcode.com/problem/610/

pub fn two_sum7(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let nums_len = nums.len();
    let mut result = vec![];

    for i in 0..nums_len {
        for j in (i + 1)..nums_len {
            if nums[j] - nums[i] == target.abs() {
                result.push(nums[i]);
                result.push(nums[j]);
                return result;
            }
        }
    }

    result
}