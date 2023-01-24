// https://leetcode.cn/problems/count-nodes-equal-to-average-of-subtree/

use rust::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

pub fn average_of_subtree(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    let mut count = 0;

    dfs(&root, &mut count);

    count
}

fn dfs(root: &Option<Rc<RefCell<TreeNode<i32>>>>, answer: &mut i32) -> (i32, i32) {
    if root.is_none() {
        return (0, 0);
    }

    let root = root.as_ref().unwrap();
    let (left_sum, left_count) = dfs(&root.borrow().left, answer);
    let (right_sum, right_count) = dfs(&root.borrow().right, answer);

    let root_val = root.borrow().val;
    let sum = root_val + left_sum + right_sum;
    let count = left_count + right_count + 1;
    let average = sum / count;

    if average == root_val {
        *answer = *answer + 1;
    }

    (sum, count)
}