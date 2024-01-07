// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;
use BinaryTree::TreeNode;
pub fn right_side_view(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Vec<i32> {
    let mut result = Vec::new();

    if root.is_none() {
        return result;
    }

    let mut queue = VecDeque::from([Rc::clone(&root.unwrap())]);

    while !queue.is_empty() {
        let len = queue.len();

        let last_val = queue.back().unwrap().borrow().val;
        result.push(last_val);

        for _ in 0..len {
            let node = queue.pop_front().unwrap();
            if node.borrow().left.is_some() {
                queue.push_back(Rc::clone(node.borrow().left.as_ref().unwrap()));
            }
            if node.borrow().right.is_some() {
                queue.push_back(Rc::clone(node.borrow().right.as_ref().unwrap()));
            }
        }
    }

    result
}
