// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/

use std::cell::RefCell;
use std::rc::Rc;
use rust::build_binary_tree;

mod solution_1;

fn main() {
    let nums = vec![Some(236), Some(104), Some(701), None, Some(227), None, Some(911)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::get_minimum_difference(root_node);
    println!("answer = {:?}", answer);
}