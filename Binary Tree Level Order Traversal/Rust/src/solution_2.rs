// https://www.lintcode.com/problem/69/solution
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

use std::cell::RefCell;
use std::rc::Rc;
use std::collections::VecDeque;
use BinaryTree::TreeNode;

pub fn level_order(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Vec<Vec<i32>> {
    let mut result = vec![];

    if root.is_none() {
        return result;
    }

    let mut queue = VecDeque::from([root]);

    while !queue.is_empty() {
        let mut nums = vec![];
        let queue_len = queue.len();

        for i in 0..queue_len {
            let node = queue.pop_front().unwrap().unwrap();
            nums.push(node.borrow().val);

            if node.borrow().left.is_some() {
                queue.push_back(node.borrow_mut().left.take());
            }

            if node.borrow().right.is_some() {
                queue.push_back(node.borrow_mut().right.take());
            }
        }

        result.push(nums);
    }


    result
}
