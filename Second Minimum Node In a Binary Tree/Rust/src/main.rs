use std::cell::RefCell;
use std::rc::Rc;
use BinaryTree::{build_binary_tree, TreeNode};

mod solution_1;

fn main() {
    let nums = vec![Some(2), Some(2), Some(5), None, None, Some(5), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::find_second_minimum_value(root_node);
    println!("answer = {:?}", answer);
}
