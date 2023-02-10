// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

use std::cmp::min;

pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
    divide_conquer(&triangle, 0, 0)
}

fn divide_conquer(triangle: &Vec<Vec<i32>>, x: usize, y: usize) -> i32 {
    if x == triangle.len() {
        return 0;
    }

    let left = divide_conquer(triangle, x + 1, y);
    let right = divide_conquer(triangle, x + 1, y + 1);
    return min(left, right) + triangle[x][y];
}