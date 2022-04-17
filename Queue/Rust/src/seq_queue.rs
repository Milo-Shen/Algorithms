use std::fmt::Display;

#[derive(Debug)]
pub struct SeqQueue<T> {
    maxsize: usize,
    head: usize,
    tail: usize,
    queue: Vec<T>,
}

impl<T> SeqQueue<T> {
    pub fn new() -> SeqQueue<T> {
        SeqQueue {
            maxsize: 100,
            head: 0,
            tail: 0,
            queue: Vec::with_capacity(100),
        }
    }

    pub fn enqueue(&mut self, item: T) -> bool {
        if self.tail == self.maxsize {
            return false;
        }
        self.queue.push(item);
        self.tail = self.tail + 1;

        true
    }

    pub fn dequeue(&mut self) -> Option<&T> {
        if self.head == self.tail {
            return None;
        }
        let data = &self.queue[self.head];
        self.head = self.head + 1;
        Option::Some(data)
    }
}

impl<T: Display> SeqQueue<T> {
    pub fn print(&self) {
        for i in self.head..self.tail {
            let value = &self.queue[i];
            println!("{}", value);
        }
    }
}