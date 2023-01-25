// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

pub fn reverse_left_words(s: String, n: i32) -> String {
    let n = n as usize;
    [&s[n..], &s[..n]].concat()
}