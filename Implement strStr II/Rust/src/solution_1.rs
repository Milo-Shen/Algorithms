pub fn solution(source: String, target: String) -> i32 {
    if target == String::from("") {
        return 0;
    }

    // BASE
    const BASE: u32 = 1000000;

    // Chars to Array
    let s_arr: Vec<char> = source.chars().collect();
    let t_arr: Vec<char> = target.chars().collect();
    let s_len = s_arr.len() as i32;
    let t_len = t_arr.len() as i32;

    // a * 31 ^ m
    let mut power = 1;
    for i in 0..t_len {
        power = (power * 31) % BASE;
    }

    // target code
    let mut target_code = 0;
    for i in 0..t_len {
        target_code = (target_code * 31 + t_arr[i as usize] as u32) % BASE;
    }

    let mut hash_code = 0;
    for i in 0..s_len {
        // abc + d
        hash_code = (hash_code * 31 + s_arr[i as usize] as u32) % BASE;
        if i < t_len - 1 {
            continue;
        }

        // abcd - a
        if i >= t_len {
            hash_code = hash_code - ((s_arr[(i - t_len) as usize] as u32 * power) % BASE);
            if hash_code < 0 {
                hash_code += BASE;
            }
        }

        // double check
        if hash_code == target_code {
            let pos = i - t_len + 1;
            let cur_hash_str: String = (&s_arr[pos as usize..(i + 1) as usize]).iter().collect();
            if cur_hash_str == target {
                return pos;
            }
        }
    }

    return -1;
}