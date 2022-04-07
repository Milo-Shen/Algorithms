mod solution_1;

fn main() {
    let nums1 = vec![1, 2];
    let nums2 = vec![-2, -1];
    let nums3 = vec![-1, 2];
    let nums4 = vec![0, 2];
    let answer = solution_1::four_sum_count(nums1, nums2, nums3, nums4);
    println!("answer = {}", answer)
}
