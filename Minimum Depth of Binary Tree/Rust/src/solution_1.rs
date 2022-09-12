// https://leetcode.cn/problems/minimum-depth-of-binary-tree/

use binary_tree::TreeNode;
use std::cell::RefCell;
use std::cmp::min;
use std::rc::Rc;

pub fn min_depth(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    if root.is_none() {
        return 0;
    }

    if root.as_ref().unwrap().borrow().left.is_none() {
        return min_depth(root.as_ref().unwrap().borrow_mut().right.take()) + 1;
    }

    if root.as_ref().unwrap().borrow().right.is_none() {
        return min_depth(root.as_ref().unwrap().borrow_mut().left.take()) + 1;
    }

    let min_left = min_depth(root.as_ref().unwrap().borrow_mut().left.take());
    let min_right = min_depth(root.as_ref().unwrap().borrow_mut().right.take());

    min(min_left, min_right) + 1
}
