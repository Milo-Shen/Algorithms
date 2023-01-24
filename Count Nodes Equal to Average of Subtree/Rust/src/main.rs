// https://leetcode.cn/problems/count-nodes-equal-to-average-of-subtree/

use rust::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(4), Some(8), Some(5), Some(0), Some(1), None, Some(6)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::average_of_subtree(root_node);
    println!("answer = {}", answer);
}
