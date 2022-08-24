// https://leetcode.cn/problems/binary-tree-inorder-traversal/

use binary_tree::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Vec<i32> {
    let mut result = vec![];

    if root.is_none() {
        return result;
    }

    let mut queue = vec![];
    let mut cur_node = root;

    while cur_node.is_some() {
        if let Some(node) = cur_node {
            cur_node = node.borrow_mut().left.take();
            queue.push(node);
        }
    }

    while !queue.is_empty() {
        let cur_node = queue.pop().unwrap();
        result.push(cur_node.borrow().val);

        let mut cur_node = cur_node.borrow_mut().right.take();
        while cur_node.is_some() {
            if let Some(node) = cur_node {
                cur_node = node.borrow_mut().left.take();
                queue.push(node);
            }
        }
    }

    result
}
