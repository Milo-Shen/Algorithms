pub fn solution(s: String) -> String {
    if s.is_empty() { panic!("string is illegal") }
    let mut longest = String::new();

    // todo: odd case
}

fn get_palindrome_from(s: String, mut left: i32, mut right: i32) -> String {
    let str_len = s.chars().count();
    while left >= 0 && right < str_len as i32 {
        if s.chars().nth(left as usize).unwrap() != s.chars().nth(right as usize).unwrap() {
            break;
        }
        left = left - 1;
        right = right + 1;
    }
    let length = right - left - 1;
    s.chars().skip((left + 1) as usize).take(length as usize).collect()
}