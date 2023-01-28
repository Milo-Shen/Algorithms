// https://leetcode.cn/problems/deepest-leaves-sum/

mod solution_1;

use rust::build_binary_tree;

fn main() {
    let nums = vec![
        Some(1), Some(2), Some(3),
        Some(4), Some(5), None,
        Some(6), Some(7), None,
        None, None, None,
        Some(8),
    ];

    let root = build_binary_tree(nums);
    let answer = solution_1::deepest_leaves_sum(root);
    println!("answer = {}", answer);
}
