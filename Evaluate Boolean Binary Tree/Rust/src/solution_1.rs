// https://leetcode.cn/problems/evaluate-boolean-binary-tree/

use std::rc::Rc;
use std::cell::RefCell;
use rust::{TreeNode, build_binary_tree};

pub fn evaluate_tree(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> bool {
    if root.is_none() {
        return true;
    }

    let root = root.unwrap();
    
    if root.borrow().val == 0 || root.borrow().val == 1 {
        return if root.borrow().val == 0 { false } else { true };
    }

    let left = evaluate_tree(root.borrow().left.clone());
    let right = evaluate_tree(root.borrow().right.clone());

    if root.borrow().val == 2 {
        return left || right;
    }

    if root.borrow().val == 3 {
        return left && right;
    }

    false
}