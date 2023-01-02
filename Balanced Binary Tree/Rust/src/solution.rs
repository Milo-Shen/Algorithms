// https://www.lintcode.com/problem/93/
// https://leetcode-cn.com/problems/balanced-binary-tree/submissions/

use std::rc::Rc;
use std::cell::RefCell;
use std::cmp::max;
use Balanced_Binary_Tree::{TreeNode, build_binary_tree};

pub fn is_balanced(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> bool {
    let (is_balanced, height) = divide_conquer(&root);
    return is_balanced;
}

fn divide_conquer(root: &Option<Rc<RefCell<TreeNode<i32>>>>) -> (bool, i32) {
    match root {
        Some(node) => {
            let (is_left_balanced, left_height) = divide_conquer(&node.borrow().left);
            let (is_right_balanced, right_height) = divide_conquer(&node.borrow().right);
            let root_height = max(left_height, right_height) + 1;

            if !is_left_balanced || !is_right_balanced {
                return (false, root_height);
            }

            if (left_height - right_height).abs() > 1 {
                return (false, root_height);
            }

            return (true, root_height);
        }
        None => (true, 0)
    }
}