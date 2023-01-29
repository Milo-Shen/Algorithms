// https://leetcode.cn/problems/container-with-most-water/

use std::cmp::{max, min};

pub fn max_area(height: Vec<i32>) -> i32 {
    let len = height.len();
    let mut answer = 0;

    for i in 0..len {
        for j in (i + 1)..len {
            let area = (j - i) as i32 * min(height[i], height[j]);
            answer = max(answer, area);
        }
    }

    answer
}