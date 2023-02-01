// https://leetcode.cn/problems/merge-sorted-array/

pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
    let total = (m + n) as usize;
    let m = m as usize;
    let n = n as usize;

    let mut p = 0;
    let mut q = 0;
    let mut i = 0;
    let mut sorted = vec![0; total];

    while p < m && q < n {
        if nums1[p] < nums2[q] {
            sorted[i] = nums1[p];
            i += 1;
            p += 1;
        } else {
            sorted[i] = nums2[q];
            i += 1;
            q += 1;
        }
    }

    while p < m {
        sorted[i] = nums1[p];
        i += 1;
        p += 1;
    }

    while q < n {
        sorted[i] = nums2[q];
        i += 1;
        q += 1;
    }

    for i in 0..total {
        nums1[i] = sorted[i];
    }
}