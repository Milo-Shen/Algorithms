use std::rc::Rc;
use std::cell::RefCell;
use BinaryTree::{TreeNode, build_binary_tree};

mod solution_1;

fn main() {
    let nums = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(17)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::level_order(root_node);
    println!("answer = {:?}", answer);
}