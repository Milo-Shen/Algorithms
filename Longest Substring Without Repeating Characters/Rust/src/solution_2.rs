// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

use std::cmp::max;
use std::collections::{HashMap, HashSet};

pub fn length_of_longest_substring(s: String) -> i32 {
    // 将 String 转换成 Vec
    let s_arr: Vec<char> = s.chars().collect();

    // 异常检测
    let s_len = s_arr.len();
    if s_len <= 1 {
        return s_len as i32;
    }

    // 存储结果
    let mut result = 0;
    let mut heap: HashMap<char, i32> = HashMap::new();

    // 采用同向双指针的方式
    let mut j = 0;
    for i in 0..s_len {
        let mut total = 1;
        let current = s_arr[i];

        if let Some(&count) = heap.get(&current) {
            total = total + count;
        }

        heap.insert(current, total);

        while *heap.get(&current).unwrap() > 1 {
            let j_char = s_arr[j];
            heap.insert(j_char, *heap.get(&j_char).unwrap() - 1);
            j = j + 1;
        }

        result = max(result, i - j + 1);
    }

    result as i32
}