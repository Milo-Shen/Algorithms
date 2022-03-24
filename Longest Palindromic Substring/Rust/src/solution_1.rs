// 基于中心线枚举的方法

// todo: 以下代码需要优化 rust 的写法，代码是正确的，但是效率不高
// Your code ran too much time than we expected. Check your time complexity. Time limit exceeded usually caused by infinite loop if your time complexity is the best.
pub fn solution(s: String) -> String {
    let mut longest = String::new();
    if s.is_empty() { return longest; }

    // odd case
    for (i, _) in s.chars().enumerate() {
        let odd_palindrome = get_palindrome_from(&s, i as i32, i as i32);
        if longest.chars().count() < odd_palindrome.chars().count() {
            longest = odd_palindrome;
        }
    }

    // even case
    for (i, _) in s.chars().enumerate() {
        let even_palindrome = get_palindrome_from(&s, i as i32, (i + 1) as i32);
        if longest.chars().count() < even_palindrome.chars().count() {
            longest = even_palindrome;
        }
    }

    return longest;
}

fn get_palindrome_from(s: &String, mut left: i32, mut right: i32) -> String {
    let s_arr: Vec<char> = s.chars().collect();
    let s_len = s_arr.len() as i32;
    while left >= 0 && right < s_len {
        if s_arr[left as usize] != s_arr[right as usize] {
            break;
        }
        left = left - 1;
        right = right + 1;
    }
    let length = right - left - 1;
    s.chars().skip((left + 1) as usize).take(length as usize).collect()
}