// https://www.lintcode.com/problem/93/
// https://leetcode-cn.com/problems/balanced-binary-tree/submissions/

use std::rc::Rc;
use std::cell::RefCell;
use Balanced_Binary_Tree::{TreeNode, build_binary_tree};

mod solution;

fn main() {
    let nums = vec![Some(3), Some(9), Some(20), None, None, Some(15), Some(7)];
    let root_node = build_binary_tree(nums);
    let answer = solution::is_balanced(root_node);
    println!("{:?}", answer);
}
