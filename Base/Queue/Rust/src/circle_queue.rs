use std::fmt::{Debug, Display};

#[derive(Debug)]
pub struct CircleQueue<T> {
    maxsize: usize,
    head: usize,
    tail: usize,
    queue: Vec<T>,
}

impl<T> CircleQueue<T> {
    pub fn new() -> CircleQueue<T> {
        CircleQueue {
            maxsize: 100,
            head: 0,
            tail: 0,
            queue: Vec::with_capacity(100),
        }
    }

    pub fn enqueue(&mut self, item: T) -> bool {
        if (self.tail + 1) % self.maxsize == self.head {
            return false;
        }
        self.queue.push(item);
        self.tail = (self.tail + 1) % self.maxsize;

        true
    }

    pub fn dequeue(&mut self) -> Option<&T> {
        if self.head == self.tail {
            return None;
        }
        let data = &self.queue[self.head];
        self.head = (self.head + 1) % self.maxsize;
        Option::Some(data)
    }
}

impl<T: Display + Debug> CircleQueue<T> {
    pub fn print(&self) {
        let mut data: Vec<&T> = Vec::new();
        for i in self.head..self.tail {
            let value = &self.queue[i];
            data.push(value);
        }
        println!("circle_queue = {:?}", data);
    }
}