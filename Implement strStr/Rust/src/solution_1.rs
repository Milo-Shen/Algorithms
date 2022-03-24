pub fn solution(source: String, target: String) -> i32 {
    if target == String::from("") {
        return 0;
    }

    let s_len = source.chars().count();
    let t_len = target.chars().count();

    for i in 0..s_len - t_len + 1 {
        let mut is_match = true;

        for j in 0..t_len {
            if source.chars().nth(i + j).unwrap() != target.chars().nth(j).unwrap() {
                is_match = false;
                break;
            }
        }

        if is_match {
            return i as i32;
        }
    }

    return -1;
}