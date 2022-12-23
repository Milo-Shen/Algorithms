// https://leetcode.cn/problems/subarray-product-less-than-k/submissions/

mod solution_1;

fn main() {
    let nums = vec![10, 2, 2, 5, 4, 4, 4, 3, 7, 7];
    let answer = solution_1::num_subarray_product_less_than_k(nums, 289);
    println!("answer = {}", answer);
}
