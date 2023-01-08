// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// https://www.lintcode.com/problem/65/

use std::cmp::min;

pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let len = nums1.len() + nums2.len();
    let half = len / 2;

    if len % 2 == 0 {
        let left = find_kth(&nums1, 0, &nums2, 0, half) as f64;
        let right = find_kth(&nums1, 0, &nums2, 0, half + 1) as f64;
        return (left + right) / 2.0;
    }

    find_kth(&nums1, 0, &nums2, 0, half + 1) as f64
}

fn find_kth(a: &Vec<i32>, start_of_a: usize, b: &Vec<i32>, start_of_b: usize, k: usize) -> i32 {
    if start_of_a >= a.len() {
        return b[start_of_b + k - 1];
    }

    if start_of_b >= b.len() {
        return a[start_of_a + k - 1];
    }

    if k == 1 {
        return min(a[start_of_a], b[start_of_b]);
    }

    let half = k / 2;
    let half_kth_of_a = if start_of_a + half - 1 < a.len() { a[start_of_a + half - 1] } else { i32::MAX };
    let half_kth_of_b = if start_of_b + half - 1 < b.len() { b[start_of_b + half - 1] } else { i32::MAX };

    if half_kth_of_a < half_kth_of_b {
        return find_kth(&a, start_of_a + k / 2, &b, start_of_b, k - half);
    }

    find_kth(&a, start_of_a, &b, start_of_b + k / 2, k - half)
}