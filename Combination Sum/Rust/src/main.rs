// https://leetcode.cn/problems/combination-sum/
// https://www.lintcode.com/problem/135/

mod solution_1;
mod solution_2;

fn main() {
    let candidates = vec![2, 3, 6, 7];
    let target = 7;
    let answer_1 = solution_1::combination_sum(candidates, target);
    println!("answer 1 = {:?}", answer_1);

    let candidates = vec![2, 3, 6, 7];
    let target = 7;
    let answer_2 = solution_2::combination_sum(candidates, target);
    println!("answer 2 = {:?}", answer_2);
}
