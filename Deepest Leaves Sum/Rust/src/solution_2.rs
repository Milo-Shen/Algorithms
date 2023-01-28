// https://leetcode.cn/problems/deepest-leaves-sum/

use std::cell::RefCell;
use std::rc::Rc;
use std::collections::VecDeque;
use rust::TreeNode;

// VecDeque 的 pop_front 的性能要远远优于用 Vec 做 remove(0)
pub fn deepest_leaves_sum(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    if root.is_none() {
        return 0;
    }

    let mut pre_sum = 0;
    let mut queue = VecDeque::from([root]);

    while !queue.is_empty() {
        let mut sum = 0;
        let queue_len = queue.len();

        for i in 0..queue_len {
            let node = queue.pop_front().unwrap().unwrap();
            sum += node.borrow().val;

            if node.borrow().left.is_some() {
                queue.push_back(node.borrow_mut().left.take());
            }

            if node.borrow().right.is_some() {
                queue.push_back(node.borrow_mut().right.take());
            }
        }

        pre_sum = sum;
    }


    pre_sum
}