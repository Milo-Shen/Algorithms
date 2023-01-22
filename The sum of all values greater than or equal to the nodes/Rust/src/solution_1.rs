// https://leetcode.cn/problems/w6cpku/

use rust::TreeNode;
use std::rc::Rc;
use std::cell::RefCell;

pub fn convert_bst(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Option<Rc<RefCell<TreeNode<i32>>>> {
    let mut sum = 0;

    dfs(&root, &mut sum);

    root
}

fn dfs(root: &Option<Rc<RefCell<TreeNode<i32>>>>, sum: &mut i32) {
    if root.is_none() {
        return;
    }

    let root = root.as_ref().unwrap();

    dfs(&root.borrow().right, sum);
    
    *sum = *sum + &root.borrow().val;
    root.borrow_mut().val = *sum;

    dfs(&root.borrow().left, sum);
}