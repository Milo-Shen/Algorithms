// https://leetcode.cn/problems/roman-to-integer/

use std::collections::HashMap;

pub fn roman_to_int(s: String) -> i32 {
    let map = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        .iter()
        .zip([1, 5, 10, 50, 100, 500, 1000])
        .collect::<HashMap<_, _>>();

    s.chars().rev().fold(0, |acc, c| {
        acc + if acc > 4 * map[&c] { -map[&c] } else { map[&c] }
    })
}