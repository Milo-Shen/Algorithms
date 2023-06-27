// https://leetcode.cn/problems/word-break/
use std::collections::HashSet;

pub fn word_break(s: String, word_dict: Vec<String>) -> bool {
    let n = s.len();

    if n == 0 || word_dict.len() == 0 {
        return false;
    }

    let mut word_set: HashSet<String> = word_dict.into_iter().collect();
    let mut dp = vec![false; n + 1];
    dp[0] = true;

    for i in 1..=n {
        for j in 0..i {
            dp[i] = dp[i] || (dp[j] && word_set.contains(&s[j..i].to_string()));
        }
    }

    dp[n]
}
