// https://leetcode.cn/problems/valid-parentheses/

pub fn is_valid(s: String) -> bool {
    let s_arr: Vec<char> = s.chars().collect();
    let s_len = s_arr.len();

    // 异常处理
    if s_len == 0 {
        return true;
    }

    let mut stack: Vec<char> = Vec::new();

    for i in 0..s_len {
        let bracket = s_arr[i];
        if i < 1 {
            stack.push(bracket);
            continue;
        }

        if let Some(&latest) = stack.last() {
            if (latest == '(' && bracket == ')') ||
                (latest == '[' && bracket == ']') ||
                (latest == '{' && bracket == '}') {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        } else {
            stack.push(bracket);
        }
    }

    stack.len() == 0
}