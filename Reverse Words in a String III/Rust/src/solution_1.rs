// https://leetcode.cn/problems/reverse-words-in-a-string-iii/

pub fn reverse_words(s: String) -> String {
    s.split(' ')
        .map(|s| s.chars().rev().collect::<String>())
        .collect::<Vec<_>>().join(" ")
}