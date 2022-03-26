// https://www.lintcode.com/problem/891/
// https://leetcode-cn.com/problems/valid-palindrome-ii/

pub fn solution(s: String) -> bool {
    if s == "" {
        return true;
    }

    let s_arr: Vec<char> = s.chars().collect();
    let s_len = s_arr.len() as i32;

    let (left, right) = find_difference(&s_arr, 0, s_len - 1);
    if left >= right {
        return true;
    }

    is_palindrome(&s_arr, left + 1, right) || is_palindrome(&s_arr, left, right - 1)
}

fn is_palindrome(arr: &Vec<char>, mut left: i32, mut right: i32) -> bool {
    let (_left, _right) = find_difference(&arr, left, right);
    _left >= _right
}

fn find_difference(arr: &Vec<char>, mut left: i32, mut right: i32) -> (i32, i32) {
    while left < right && arr[left as usize] == arr[right as usize] {
        left = left + 1;
        right = right - 1;
    }
    return (left, right);
}