// https://leetcode.cn/problems/binary-tree-preorder-traversal/
// https://www.lintcode.com/problem/66/

use binary_tree::build_binary_tree;
use std::cell::RefCell;
use std::rc::Rc;

mod solution_1;

fn main() {
    let nums = vec![Some(1), None, Some(2), Some(3)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::preorder_traversal(root_node);
    println!("answer = {:?}", answer);
}
