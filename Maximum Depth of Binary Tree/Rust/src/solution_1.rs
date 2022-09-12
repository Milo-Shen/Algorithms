// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/submissions/
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// https://www.lintcode.com/problem/97/

use binary_tree::TreeNode;
use std::cell::RefCell;
use std::cmp::max;
use std::rc::Rc;

pub fn max_depth(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    if root.is_none() {
        return 0;
    }

    let left_depth = max_depth(root.as_ref().unwrap().borrow_mut().left.take());
    let right_depth = max_depth(root.as_ref().unwrap().borrow_mut().right.take());

    max(left_depth, right_depth) + 1
}
