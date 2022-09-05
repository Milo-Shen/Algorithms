// https://leetcode.cn/problems/combination-sum-iv/

mod solution_1;

fn main() {
    let candidates = vec![2, 1, 3];
    let target = 35;
    let answer_1 = solution_1::combination_sum4(candidates, target);
    println!("answer 1 = {:?}", answer_1);
}