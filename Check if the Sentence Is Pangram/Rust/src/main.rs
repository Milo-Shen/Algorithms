// https://leetcode.cn/problems/minimize-product-sum-of-two-arrays/

mod solution_1;

fn main() {
    let nums1 = vec![5, 3, 4, 2];
    let nums2 = vec![4, 2, 2, 5];
    let answer = solution_1::min_product_sum(nums1, nums2);
    println!("answer = {}", answer);
}
