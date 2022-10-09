// https://leetcode.cn/problems/score-of-parentheses/

pub fn score_of_parentheses(s: String) -> i32 {
    let char_arr = s.chars().collect::<Vec<char>>();
    let mut deep = 0;
    let mut answer = 0;

    for i in 0..char_arr.len() {
        if char_arr[i] == '(' {
            deep += 1;
        } else {
            deep -= 1;
        }

        if char_arr[i] == ')' && char_arr[i - 1] == '(' {
            answer += 1 << deep;
        }
    }

    answer
}
