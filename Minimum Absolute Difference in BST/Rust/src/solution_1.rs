// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/

use std::cell::RefCell;
use std::rc::Rc;

pub fn get_minimum_difference(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    let mut result = vec![];
    travel(root, &mut result);
    result
}

fn travel(root: Option<Rc<RefCell<TreeNode<i32>>>>, nums: &mut Vec<i32>) {
    if root.is_none() {
        return;
    }

    travel(root.as_ref().unwrap().borrow_mut().left.take(), nums);
    nums.push(root.as_ref().unwrap().borrow().val);
    travel(root.as_ref().unwrap().borrow_mut().right.take(), nums);
}
