// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

mod solution_1;

fn main() {
    let nums = vec![1, 1, 1];
    let answer = solution_1::subsets_with_dup(nums);
    println!("answer = {:?}", answer);
}
