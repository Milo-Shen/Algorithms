// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

use std::collections::HashSet;

pub fn length_of_longest_substring(s: String) -> i32 {
    // 将 String 转换成 Vec
    let s_arr: Vec<char> = s.chars().collect();

    // 异常检测
    let s_len = s_arr.len();
    if s_len <= 1 {
        return s_len as i32;
    }

    // 在结果集上进行二分
    let mut left = 0;
    let mut right = s_len;

    while left + 1 < right {
        let mid = left + (right - left) / 2;

        if is_valid(&s_arr, mid, s_len) {
            left = mid;
        } else {
            right = mid;
        }
    }

    if is_valid(&s_arr, right, s_len) {
        return right as i32;
    }

    if is_valid(&s_arr, left, s_len) {
        return left as i32;
    }

    0
}

fn is_valid(arr: &Vec<char>, num: usize, arr_len: usize) -> bool {
    let mut left = 0;
    let mut right = num - 1;
    let mut visited: HashSet<char> = HashSet::new();

    while right < arr_len {
        visited.clear();

        for i in left..(right + 1) {
            let value = arr[i];
            visited.insert(value);
        }

        if visited.len() == num {
            return true;
        }

        left = left + 1;
        right = right + 1;
    }

    return false;
}