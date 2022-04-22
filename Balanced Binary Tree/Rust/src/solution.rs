use std::rc::Rc;
use std::cell::RefCell;
use std::cmp::max;
use Balanced_Binary_Tree::{TreeNode, build_binary_tree};

pub fn is_balanced(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> bool {
    let (is_balanced, height) = divide_conquer(root);
    return is_balanced;
}

// todo: 这里使用了 clone, 后续可以优化这块
fn divide_conquer(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> (bool, i32) {
    match root {
        Some(node) => {
            let (is_left_balanced, left_height) = divide_conquer(node.borrow().left.clone());
            let (is_right_balanced, right_height) = divide_conquer(node.borrow().right.clone());
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