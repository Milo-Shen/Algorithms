// https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated/

pub fn check(nums: Vec<i32>) -> bool {
    let mut count = 0;
    let len = nums.len();

    for i in 0..len {
        if nums[i] > nums[ ( i + 1 ) % len ] {
            count = count + 1;
        }
    }

    count <= 1
}