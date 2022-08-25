// https://leetcode.cn/problems/binary-tree-postorder-traversal/
// https://www.lintcode.com/problem/68/solution

use binary_tree::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

pub fn postorder_traversal(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Vec<i32> {
    let mut result = vec![];
    travel(root, &mut result);
    result
}

fn travel(root: Option<Rc<RefCell<TreeNode<i32>>>>, nums: &mut Vec<i32>) {
    if root.is_none() {
        return;
    }

    travel(root.as_ref().unwrap().borrow_mut().left.take(), nums);
    travel(root.as_ref().unwrap().borrow_mut().right.take(), nums);

    let value = root.as_ref().unwrap().borrow().val;
    nums.push(value);
}
