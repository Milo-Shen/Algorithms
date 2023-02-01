// https://leetcode.cn/problems/largest-number-at-least-twice-of-others/

pub fn dominant_index(nums: Vec<i32>) -> i32 {
    let mut index = 0;
    let mut m1 = i32::MIN;
    let mut m2 = i32::MIN;

    for (i, &num) in nums.iter().enumerate() {
        if num > m1 {
            m2 = m1;
            m1 = num;
            index = i as i32;
        } else if num > m2 {
            m2 = num
        }
    }

    return if m1 >= m2 * 2 { index } else { -1 };
}