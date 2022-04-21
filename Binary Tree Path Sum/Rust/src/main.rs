use std::rc::Rc;
use std::cell::RefCell;
use BinaryTree::{TreeNode, build_binary_tree};

mod solution_1;

fn main() {
    let nums = vec![
        Some(5), Some(4), Some(8), Some(11), None,
        Some(13), Some(4), Some(7), Some(2), None,
        None, None, Some(1),
    ];
    let nums = vec![
        Some(1), Some(2), Some(3),
    ];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::binary_tree_path_sum(root_node, 5);
    println!("answer = {:?}", answer);
}