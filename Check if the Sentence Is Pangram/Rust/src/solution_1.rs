// https://leetcode.cn/problems/minimize-product-sum-of-two-arrays/submissions/

pub fn min_product_sum(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let mut nums1 = nums1;
    let mut nums2 = nums2;

    nums1.sort();
    nums2.sort();

    let mut answer = 0;
    let len = nums1.len();

    for i in 0..len {
        answer += nums1[i] * nums2[len - 1 - i];
    }

    answer
}