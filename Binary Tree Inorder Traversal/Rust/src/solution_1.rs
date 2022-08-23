// https://leetcode.cn/problems/binary-tree-inorder-traversal/

use std::cell::RefCell;
use std::rc::Rc;
use BinaryTree::TreeNode;

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
        let mut cur_node = queue.pop().unwrap();
        result.push(cur_node.borrow().val);
        cur_node = Rc::clone(cur_node.borrow().left.as_ref().unwrap());
    }

    result
}
