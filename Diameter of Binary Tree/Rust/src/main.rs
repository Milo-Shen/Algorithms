// https://leetcode.cn/problems/diameter-of-binary-tree/

use binary_tree::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(2), Some(2), Some(5), None, None, Some(5), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::diameter_of_binary_tree(root_node);
    println!("answer = {:?}", answer);
}