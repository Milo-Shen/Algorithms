// https://leetcode.cn/problems/largest-unique-number/

pub fn largest_unique_number(nums: Vec<i32>) -> i32 {
    let mut count = [0; 1001];

    for i in nums {
        count[i as usize] = count[i as usize] + 1;
    }

    for i in (0..1001).rev() {
        if count[i as usize] == 1 {
            return i;
        }
    }

    -1
}
