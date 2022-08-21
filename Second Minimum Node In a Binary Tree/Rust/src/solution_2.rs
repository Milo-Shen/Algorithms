// https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/

use std::cell::RefCell;
use std::rc::Rc;
use BinaryTree::TreeNode;

pub fn find_second_minimum_value(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    helper(root, 100)
}

fn helper(root: Option<Rc<RefCell<TreeNode<i32>>>>, min: i32) -> i32 {
    -1
}