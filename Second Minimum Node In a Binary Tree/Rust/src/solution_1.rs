use std::borrow::BorrowMut;
use std::cell::RefCell;
use std::rc::Rc;
use BinaryTree::TreeNode;

pub fn find_second_minimum_value(root: Option<Rc<RefCell<TreeNode<i32>>>>) -> i32 {
    if root.is_none() {
        return -1;
    }

    let min = root.as_ref().unwrap().borrow().val;

    let mut list: Vec<i32> = Vec::with_capacity(100);
    let mut queue = vec![Rc::clone(&root.unwrap())];

    while !queue.is_empty() {
        let node = queue.remove(0);

        let val = node.borrow().val;
        list.push(val);

        if node.borrow().left.is_some() {
            queue.push(Rc::clone(node.borrow().left.as_ref().unwrap()));
        }

        if node.borrow().right.is_some() {
            queue.push(Rc::clone(node.borrow().right.as_ref().unwrap()));
        }
    }

    list.sort();

    for val in list {
        if min < val {
            return val;
        }
    }

    -1
}
