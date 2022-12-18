// https://leetcode.cn/problems/number-of-subsings-with-only-1s/

use std::cmp::max;

static MOD: usize = 1000000007;

pub fn num_sub(s: String) -> i32 {
    let char_arr = s.chars().collect::<Vec<char>>();
    let str_len = char_arr.len();

    let mut j = 1;
    let mut answer = 0;

    for i in 0..str_len {
        if char_arr[i] != '1' {
            continue;
        }

        j = max(j, i + 1);
        while j < str_len && char_arr[j] == '1' {
            j += 1;
        }

        answer += j - i;
        answer = answer % MOD;
    }

    answer as i32
}