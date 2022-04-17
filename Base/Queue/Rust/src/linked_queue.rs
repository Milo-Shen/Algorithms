use std::fmt::{Debug, Display};

#[derive(Debug)]
pub struct Node<T> {
    value: T,
    next: Box<Option<Node<T>>>,
}

impl<T> Node<T> {
    pub fn new(value: T) -> Node<T> {
        Node {
            value,
            next: Box::new(None),
        }
    }
}

impl<T: Display + Debug> Node<T> {
    pub fn print(&self) {
        println!("Node = {}", self.value);
    }
}

#[derive(Debug)]
pub struct LinkedQueue<T> {
    head: Box<Option<Node<T>>>,
    tail: Box<Option<Node<T>>>,
}

// todo: finish the code later
impl<T> LinkedQueue<T> {
    pub fn enqueue(&mut self, item: T) {}
}