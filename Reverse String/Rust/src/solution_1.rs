// https://leetcode.cn/problems/reverse-string/

pub fn reverse_string(s: &mut Vec<char>) {
    let len = s.len();
    let mut tmp;
    for i in 0..len / 2 {
        tmp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = tmp;
    }
}