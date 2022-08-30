// https://leetcode.cn/problems/plus-one/

pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
    let mut digits = digits;
    let len = digits.len();

    for i in (0..len).rev() {
        digits[i] += 1;
        digits[i] %= 10;

        if digits[i] != 0 {
            return digits;
        }
    }

    let mut result = vec![1];
    result.append(&mut digits);
    result
}