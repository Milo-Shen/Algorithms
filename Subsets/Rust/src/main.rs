// https://www.lintcode.com/problem/17/
// https://leetcode.cn/problems/subsets/submissions/

mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![1, 2, 3];
    let answer_1 = solution_1::subsets(nums);
    println!("answer_1 = {:?}", answer_1);

    let nums = vec![1, 2, 3];
    let answer_2 = solution_2::subsets(nums);
    println!("answer_2 = {:?}", answer_2);
}
