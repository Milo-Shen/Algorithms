pub fn solution(source: String, target: String) -> i32 {
    if target == String::from("") {
        return 0;
    }

    let s_arr: Vec<char> = source.chars().collect();
    let t_arr: Vec<char> = target.chars().collect();
    let s_len = s_arr.len() as i32;
    let t_len = t_arr.len() as i32;

    for i in 0..s_len - t_len + 1 {
        let mut is_match = true;

        for j in 0..t_len {
            if s_arr[(i + j) as usize] != t_arr[j as usize] {
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