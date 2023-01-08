// https://leetcode.cn/problems/median-of-two-sorted-arrays/
// https://www.lintcode.com/problem/65/

mod solution_1;
mod solution_2;

fn main() {
    let nums1 = vec![1, 3];
    let nums2 = vec![2];
    let answer = solution_1::find_median_sorted_arrays(nums1, nums2);
    println!("answer = {}", answer);

    let nums1 = vec![1, 3];
    let nums2 = vec![2];
    let answer = solution_2::find_median_sorted_arrays(nums1, nums2);
    println!("answer = {}", answer);
}
