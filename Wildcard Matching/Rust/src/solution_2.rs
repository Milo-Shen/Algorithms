// https://leetcode.cn/problems/wildcard-matching/description/
pub fn is_match(s: String, p: String) -> bool {
    let s_chars = s.chars().collect::<Vec<char>>();
    let p_chars = p.chars().collect::<Vec<char>>();

    let n = s_chars.len();
    let m = p_chars.len();

    let mut dp = vec![vec![false; m + 1]; 2];
    dp[0][0] = true;

    for i in 1..=m {
        dp[0][i] = dp[0][i - 1] && p_chars[i - 1] == '*';
    }

    for i in 1..=n {
        dp[i % 2][0] = false;

        for j in 1..=m {
            if p_chars[j - 1] == '*' {
                dp[i % 2][j] = dp[(i - 1) % 2][j] || dp[i % 2][j - 1];
            } else {
                dp[i % 2][j] = dp[(i - 1) % 2][j - 1]
                    && (s_chars[i - 1] == p_chars[j - 1] || p_chars[j - 1] == '?');
            }
        }
    }

    dp[n % 2][m]
}
