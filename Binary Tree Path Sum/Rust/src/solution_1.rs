use std::rc::Rc;
use std::cell::RefCell;
use BinaryTree::TreeNode;

pub fn has_path_sum(root: Option<Rc<RefCell<TreeNode<i32>>>>, target_sum: i32) -> bool {
    let list = binary_tree_path_sum(root, target_sum);
    let length = list.len();
    if length > 0 { true } else { false }
}

pub fn binary_tree_path_sum(root: Option<Rc<RefCell<TreeNode<i32>>>>, target_sum: i32) -> Vec<Vec<i32>> {
    let mut result = vec![];

    if root.is_none() {
        return result;
    }

    let root = root.unwrap();

    if root.borrow().left.is_none() && root.borrow().right.is_none() {
        result.push(vec![root.borrow().val]);
        return result;
    }
    
    if let Some(left_node) = &root.borrow().left {
        let mut left_path = binary_tree_path_sum(Some(Rc::clone(left_node)), target_sum - root.borrow().val);
        for i in 0..left_path.len() {
            let value = root.borrow().val;
            left_path[i].push(value);
            result.push(left_path[i].clone());
        }
    }

    if let Some(right_node) = &root.borrow().right {
        let mut right_path = binary_tree_path_sum(Some(Rc::clone(right_node)), target_sum - root.borrow().val);
        for i in 0..right_path.len() {
            let value = root.borrow().val;
            right_path[i].push(value);
            result.push(right_path[i].clone());
        }
    }

    result
}