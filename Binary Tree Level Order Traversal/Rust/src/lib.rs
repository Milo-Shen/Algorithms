// https://www.lintcode.com/problem/69/solution
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

use std::cell::RefCell;
use std::rc::Rc;
use std::vec;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode<T> {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode<T>>>>,
    pub right: Option<Rc<RefCell<TreeNode<T>>>>,
}

impl<T> TreeNode<T> {
    pub fn new(val: i32) -> Self {
        Self {
            val,
            left: None,
            right: None,
        }
    }
}

pub fn build_binary_tree(nums: Vec<Option<i32>>) -> Option<Rc<RefCell<TreeNode<i32>>>> {
    let nums_len = nums.len();
    if nums_len == 0 {
        return None;
    }

    let root_node: TreeNode<i32> = TreeNode::new(nums[0].unwrap());
    let root_node_rc = Rc::new(RefCell::new(root_node));
    let mut queue = vec![Rc::clone(&root_node_rc)];

    let mut i = 1;
    while i < nums_len {
        let node = queue.remove(0);

        if let Some(num) = nums[i] {
            let new_node: Rc<RefCell<TreeNode<i32>>> = Rc::new(RefCell::new(TreeNode::new(num)));
            (*node.borrow_mut()).left = Some(Rc::clone(&new_node));
            queue.push(Rc::clone(&new_node));
        }

        if i + 1 < nums_len {
            if let Some(num) = nums[i + 1] {
                let new_node: Rc<RefCell<TreeNode<i32>>> =
                    Rc::new(RefCell::new(TreeNode::new(num)));
                (*node.borrow_mut()).right = Some(Rc::clone(&new_node));
                queue.push(Rc::clone(&new_node));
            }
        }

        i = i + 2;
    }

    Some(Rc::clone(&root_node_rc))
}
