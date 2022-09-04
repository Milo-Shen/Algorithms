// https://leetcode.cn/problems/combination-sum-ii/
// https://www.lintcode.com/problem/153

mod solution_1;

fn main() {
    let candidates = vec![10, 1, 2, 7, 6, 1, 5];
    let target = 8;
    let answer = solution_1::combination_sum2(candidates, target);
    println!("answer = {:?}", answer);
}
