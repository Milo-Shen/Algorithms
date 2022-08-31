// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/

use std::cell::RefCell;
use std::cmp::min;
use std::rc::Rc;
use rust::TreeNode;

pub fn get_minimum_difference(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    let mut min_val = i32::MAX;
    let mut pre_val = None;

    travel(root, &mut min_val, &mut pre_val);

    min_val
}

fn travel(root: Option<Rc<RefCell<TreeNode<i32>>>>, min_val: &mut i32, pre_val: &mut Option<i32>) {
    if root.is_none() {
        return;
    }

    travel(root.as_ref().unwrap().borrow_mut().left.take(), min_val, pre_val);

    let val = root.as_ref().unwrap().borrow().val;
    
    if pre_val.is_some() {
        *min_val = min(*min_val, (pre_val.unwrap() - val).abs());
    }

    *pre_val = Some(val);

    travel(root.as_ref().unwrap().borrow_mut().right.take(), min_val, pre_val);
}
