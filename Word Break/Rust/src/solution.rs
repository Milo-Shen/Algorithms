// https://leetcode.cn/problems/word-break/

use std::collections::HashSet;

pub fn word_break(s: String, word_dict: Vec<String>) -> bool {
    let n = word_dict.len();

    if n == 0 {
        return false;
    }

    let mut word_set: HashSet<String> = word_dict.into_iter().collect();

    false
}
