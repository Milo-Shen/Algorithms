// https://leetcode.cn/problems/deepest-leaves-sum/

mod solution_1;
mod solution_2;

use rust::build_binary_tree;

fn main() {
    let nums = vec![
        Some(1), Some(2), Some(3),
        Some(4), Some(5), None,
        Some(6), Some(7), None,
        None, None, None,
        Some(8),
    ];

    let root = build_binary_tree(nums.clone());
    let answer = solution_1::deepest_leaves_sum(root);
    println!("answer = {}", answer);

    let root = build_binary_tree(nums.clone());
    let answer = solution_2::deepest_leaves_sum(root);
    println!("answer = {}", answer);
}
