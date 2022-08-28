// https://www.lintcode.com/problem/15/
// https://leetcode.cn/problems/permutations/

mod solution_1;

fn main() {
    let nums = vec![1, 2, 3];
    let answer = solution_1::permute(nums);
    println!("answer = {:?}", answer);
}
