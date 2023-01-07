// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// https://www.lintcode.com/problem/65/

pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let mut num = nums1;
    let mut nums2 = nums2;
    num.append(&mut nums2);
    num.sort();

    let len = num.len();
    let half = (len - 1) / 2;

    return if len % 2 == 0 {
        (num[half] as f64 + num[half + 1] as f64) / 2.0
    } else {
        num[half] as f64
    };
}