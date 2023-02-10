// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

use std::{cmp::min, collections::HashMap};

pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
    let mut map = HashMap::new();
    return divide_conquer(&triangle, 0, 0, &mut map);
}

fn divide_conquer(
    triangle: &Vec<Vec<i32>>,
    x: usize,
    y: usize,
    map: &mut HashMap<(usize, usize), i32>,
) -> i32 {
    if x == triangle.len() {
        return 0;
    }

    if map.contains_key(&(x, y)) {
        return *(map.get(&(x, y)).unwrap());
    }

    let left = divide_conquer(triangle, x + 1, y, map);
    let right = divide_conquer(triangle, x + 1, y + 1, map);
    let path = min(left, right) + triangle[x][y];
    map.insert((x, y), path);

    return path;
}
