// https://www.lintcode.com/problem/16/
// https://leetcode.cn/problems/permutations-ii/

mod solution_1;

fn main() {
    let nums = vec![1, 2, 3];
    let answer = solution_1::permute_unique(nums);
    println!("answer = {:?}", answer);
}
