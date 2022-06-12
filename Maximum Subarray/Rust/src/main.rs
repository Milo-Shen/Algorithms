// https://leetcode.cn/problems/maximum-subarray/
// https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

mod solution_1;

fn main() {
    // test cases
    let nums = vec![-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let max = solution_1::max_sub_array(nums);
    println!("answer = {}", max);
}
