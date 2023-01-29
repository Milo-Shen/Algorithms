// https://leetcode.cn/problems/count-asterisks/

pub fn count_asterisks(s: String) -> i32 {
    let s_arr = s.chars().collect::<Vec<char>>();
    let s_len = s_arr.len();

    let mut flag = true;
    let mut count = 0;

    for i in 0..s_len {
        if s_arr[i] == '|' {
            flag = !flag;
        }

        if flag && s_arr[i] == '*' {
            count += 1;
        }
    }

    count
}