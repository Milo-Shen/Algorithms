// https://leetcode.cn/problems/container-with-most-water/

use std::cmp::{max, min};

pub fn max_area(height: Vec<i32>) -> i32 {
    let mut maximum = 0;

    let mut start = 0;
    let mut end = height.len() - 1;

    while start < end {
        let area = (end - start) as i32 * min(height[start], height[end]);
        maximum = max(maximum, area);

        if height[start] > height[end] {
            end -= 1;
        } else {
            start += 1;
        }
    }

    maximum
}