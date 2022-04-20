use std::rc::Rc;
use std::cell::RefCell;
use BinaryTree::{TreeNode, build_binary_tree};

mod solution_1;

fn main() {
    let nums = vec![Some(1), Some(2), Some(4), Some(2), Some(3)];
    let root_node = build_binary_tree(nums);
}