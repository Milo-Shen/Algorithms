// https://www.lintcode.com/problem/1870/

use std::cmp::max;

static MOD: usize = 1000000007;

pub fn string_count(str: String) -> i32 {
    let char_arr = str.chars().collect::<Vec<char>>();
    let str_len = char_arr.len();

    let mut j = 1;
    let mut answer = 0;

    for i in 0..str_len {
        if char_arr[i] != '0' {
            continue;
        }

        j = max(j, i + 1);
        while j < str_len && char_arr[j] == '0' {
            j += 1;
        }

        answer += j - i;
        answer = answer % MOD;
    }

    answer as i32
}