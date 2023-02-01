// https://leetcode.cn/problems/merge-sorted-array/

mod solution_1;

fn main() {
    let mut nums1 = vec![1, 2, 3, 0, 0, 0];
    let m = 3;
    let mut nums2 = vec![2, 5, 6];
    let n = 3;
    solution_1::merge(&mut nums1, m, &mut nums2, n);
    println!("answer = {:?}", nums1);
}
