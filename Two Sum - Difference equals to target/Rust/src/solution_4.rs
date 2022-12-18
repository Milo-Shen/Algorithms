// https://www.lintcode.com/problem/610/

use std::collections::HashMap;

pub fn two_sum7(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let nums_len = nums.len();
    let mut result = vec![];

    let mut hash = HashMap::with_capacity(nums_len);
    for i in 0..nums_len {
        let num1 = nums[i];
        hash.insert(num1, i);
    }

    for i in 0..nums_len {
        let num1 = nums[i];
        let num2 = num1 + target.abs();
        if hash.contains_key(&num2) && *hash.get(&num2).unwrap() != i {
            return vec![num1, num2];
        }
    }

    result
}