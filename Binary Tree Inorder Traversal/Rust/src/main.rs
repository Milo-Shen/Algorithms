// https://leetcode.cn/problems/binary-tree-inorder-traversal/

use binary_tree::build_binary_tree;

mod solution_1;
mod solution_2;

fn main() {
    let nums = vec![Some(2), Some(2), Some(5), None, None, Some(5), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::inorder_traversal(root_node);
    println!("answer = {:?}", answer);

    let nums = vec![Some(2), Some(2), Some(5), None, None, Some(5), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_2::inorder_traversal(root_node);
    println!("answer = {:?}", answer);
}
