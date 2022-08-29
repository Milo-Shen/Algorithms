// https://leetcode.cn/problems/length-of-last-word/

pub fn length_of_last_word(s: String) -> i32 {
    let mut max_len = 0;

    // 异常检测
    let s_char: Vec<char> = s.chars().collect();
    let s_len = s_char.len();
    if s_len == 0 {
        return max_len;
    }

    let mut i = s_len - 1;

    loop {
        if s_char[i] != ' ' {
            break;
        }

        i = i - 1;
    }

    let mut i = i as i32;
    loop {
        if i < 0 {
            break;
        }

        if s_char[i as usize] == ' ' {
            break;
        }

        max_len = max_len + 1;

        i = i - 1;
    }

    max_len
}