// https://leetcode.cn/problems/number-of-common-factors/

use std::cmp::min;

pub fn common_factors(a: i32, b: i32) -> i32 {
    let min_val = min(a, b);
    let mut result = 0;

    for i in 1..(min_val + 1) {
        if a % i == 0 && b % i == 0 {
            result += 1;
        }
    }

    result
}