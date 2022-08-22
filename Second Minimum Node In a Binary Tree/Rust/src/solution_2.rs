// https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/

use std::cell::RefCell;
use std::cmp::{max, min};
use std::rc::Rc;
use BinaryTree::TreeNode;

pub fn find_second_minimum_value(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    let min = root.as_ref().unwrap().borrow().val;
    helper(root, min)
}

fn helper(root: Option<Rc<RefCell<TreeNode<i32>>>>, minimum: i32) -> i32 {
    if root.is_none() {
        return -1;
    }

    let val = root.as_ref().unwrap().borrow().val;

    // 如果当前结点值大于根节点，那么不用再遍历它的子节点，直接返回该值
    if val > minimum {
        return val;
    }

    // 否则，即当前结点值等于根节点, 则需要在两棵子树找目标值结点
    let left = helper(root.as_ref().unwrap().borrow().left.clone(), minimum);
    let right = helper(root.as_ref().unwrap().borrow().right.clone(), minimum);

    // 如果两棵子树均存在大于最小值的节点，那么返回较小的那一个
    if left > minimum && right > minimum {
        return min(left, right);
    }

    // 否则，其余情况均返回较大的那一个
    return max(left, right);
}
