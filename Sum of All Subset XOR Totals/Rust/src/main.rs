// https://leetcode.cn/problems/sum-of-all-subset-xor-totals/

mod solution_1;
mod solution_2;

fn main() {
    let answer = solution_1::subset_xor_sum(vec![1, 3]);
    println!("answer_1 = {}", answer);

    let answer = solution_2::subset_xor_sum(vec![1, 3]);
    println!("answer_2 = {}", answer);
}
