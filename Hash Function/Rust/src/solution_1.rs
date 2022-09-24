pub fn hash_code(key: String, h_a_s_h__s_i_z_e: i32) -> i32 {
    // write your code here
    let mut result: i64 = 0;

    let key_arr = key.chars().collect::<Vec<char>>();
    for i in key_arr {
        result = result * 33 + i as i64;
        result = result % h_a_s_h__s_i_z_e as i64;
    }

    result as i32
}