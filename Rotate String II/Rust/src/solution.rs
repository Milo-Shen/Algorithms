// https://www.lintcode.com/problem/1790/

pub fn rotate_string2(str: String, left: i32, right: i32) -> String {
    let char_vec: Vec<char> = str.chars().collect();
    let str_len = char_vec.len() as i32;
    let is_left_bigger = left > right;
    let iter_len = ((left - right).abs()) % str_len;

    if iter_len == 0 || str_len == 0 {
        return str;
    }

    let split_index = if is_left_bigger { iter_len } else { str_len - iter_len };
    let (left, right) = char_vec.split_at(split_index as usize);
    
    [right, left].concat().iter().collect::<String>()
}