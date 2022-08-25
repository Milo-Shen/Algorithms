// https://leetcode.cn/problems/binary-tree-postorder-traversal/
// https://www.lintcode.com/problem/68/solution

use binary_tree::build_binary_tree;
use std::cell::RefCell;
use std::rc::Rc;

mod solution_1;

fn main() {
    let nums = vec![Some(1), None, Some(2), Some(3)];
    let root_node = build_binary_tree(nums);
    let answer = solution_1::postorder_traversal(root_node);
    println!("answer = {:?}", answer);
}
