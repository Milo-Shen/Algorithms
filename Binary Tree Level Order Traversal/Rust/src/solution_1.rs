use std::rc::Rc;
use std::cell::RefCell;
use BinaryTree::TreeNode;

pub fn level_order(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = vec![];

    match root {
        Some(node) => {
            let mut queue = vec![Rc::clone(&node)];
            while queue.len() > 0 {
                let mut temp: Vec<i32> = vec![];
                let length = queue.len();
                for _ in 0..length {
                    let node = queue.remove(0);
                    temp.push((*node.borrow()).val);
                    if node.borrow().left.is_some() {
                        // 不用 take 会报以下错误:
                        // move occurs because value has type `Option<Rc<RefCell<TreeNode<i32>>>>`, which does not implement the `Copy` trait
                        queue.push(node.borrow_mut().left.take().unwrap());
                    }
                    if node.borrow().right.is_some() {
                        queue.push(node.borrow_mut().right.take().unwrap());
                    }
                };
                result.push(temp);
            }

            return result;
        }
        _ => result
    }
}
