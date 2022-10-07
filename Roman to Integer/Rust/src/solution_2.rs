// https://leetcode.cn/problems/roman-to-integer/

use std::collections::HashMap;

pub fn roman_to_int(s: String) -> i32 {
    let map = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        .iter()
        .zip([1, 5, 10, 50, 100, 500, 1000])
        .collect::<HashMap<_, _>>();

    let s_char = s.chars().collect::<Vec<char>>();
    let s_len = s_char.len();
    let mut total = 0;

    for i in 0..s_len {
        let val = *map.get(&s_char[i]).unwrap();
        if i < s_len - 1 && val < *map.get(&s_char[i + 1]).unwrap() {
            total -= val;
        } else {
            total += val;
        }
    }

    total
}