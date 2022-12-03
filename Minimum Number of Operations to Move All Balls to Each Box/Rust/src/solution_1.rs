// https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

use std::cmp::max;

pub fn min_operations(boxes: String) -> Vec<i32> {
    let boxes = boxes.as_bytes();
    let box_len = boxes.len();
    let mut result = Vec::with_capacity(boxes.len());

    for i in 0..box_len {
        let mut sum = 0;

        for j in 0..box_len {
            if boxes[j] == b'1' {
                sum += (i as i32 - j as i32).abs();
            }
        }

        result.push(sum);
    }

    result
}