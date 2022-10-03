pub fn max_depth(s: String) -> i32 {
    let s_char = s.chars().collect::<Vec<char>>();
    let mut max = 0;
    let mut level = 0;

    for char in s_char {
        if char == '(' {
            level = level + 1;
            max = if max < level { level } else { max };
        } else if char == ')' {
            level = level - 1;
        }
    }

    max
}