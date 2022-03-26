pub fn solution(s: String) -> bool {
    if s == "" {
        return true;
    }

    let s_arr: Vec<char> = s.chars().collect();
    let mut left = 0;
    let mut right = s_arr.len() as i32 - 1;

    while left < right {
        while left < right && !is_valid(&s_arr[left as usize]) {
            left = left + 1;
        }

        while left < right && !is_valid(&s_arr[right as usize]) {
            right = right - 1;
        }

        if left < right && !is_equal(&s_arr[left as usize], &s_arr[right as usize]) {
            return false;
        }

        left = left + 1;
        right = right - 1;
    }

    return true;
}

fn is_valid(ch: &char) -> bool {
    ch.is_digit(10) || ch.is_alphabetic()
}

fn is_equal(a: &char, b: &char) -> bool {
    a.to_lowercase().to_string() == b.to_lowercase().to_string()
}