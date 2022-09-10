// https://www.lintcode.com/problem/16/
// https://leetcode.cn/problems/permutations-ii/

mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![1, 2, 3];
    let answer = solution_1::permute_unique(nums);
    println!("answer = {:?}", answer);

    let nums = vec![1, 2, 3];
    let answer = solution_2::permute_unique(nums);
    println!("answer = {:?}", answer);
}
