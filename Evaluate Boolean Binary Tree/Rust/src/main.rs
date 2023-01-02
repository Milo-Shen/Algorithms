// https://leetcode.cn/problems/evaluate-boolean-binary-tree/

use std::rc::Rc;
use std::cell::RefCell;
use rust::{TreeNode, build_binary_tree};

mod solution_1;

fn main() {
    let nums = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::evaluate_tree(root_node);
    println!("{:?}", answer);
}
