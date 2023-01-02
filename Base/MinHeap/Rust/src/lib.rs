use std::clone::Clone;

pub struct MinHeap<T> {
    pub array: Vec<T>,
}

impl<T: PartialOrd + Clone + Copy> MinHeap<T> {
    pub fn new() -> Self {
        Self { array: Vec::new() }
    }

    pub fn sift_up(&mut self, mut k: usize) {
        while k != 0 {
            let father = (k - 1) / 2;
            if self.array[k] > self.array[father] {
                break;
            }

            let temp = self.array[k];
            self.array[k] = self.array[father];
            self.array[father] = temp;
            k = father;
        }
    }

    pub fn sift_down(&mut self, mut k: usize) {
        let arr_len = self.array.len();

        while k * 2 + 1 < arr_len {
            let left_son = k * 2 + 1;
            let right_son = k * 2 + 2;
            let mut son = left_son;

            if right_son < arr_len && self.array[left_son] > self.array[right_son] {
                son = right_son;
            }

            if self.array[son] > self.array[k] {
                break;
            }

            let temp = self.array[son];
            self.array[son] = self.array[k];
            self.array[k] = temp;
            k = son;
        }
    }

    pub fn push(&mut self, value: T) {
        let index = self.array.len();
        self.array.push(value);
        self.sift_up(index);
    }

    pub fn peek(&self) -> Option<T> {
        if self.array.len() == 0 {
            None
        } else {
            Some(self.array[0])
        }
    }

    pub fn pop(&mut self) -> Option<T> {
        if self.array.len() == 0 {
            return None;
        }

        let first = self.array[0];
        let last = self.array.pop().unwrap();

        if first != last {
            self.array[0] = last;
            self.sift_down(0);
        }

        Some(first)
    }
}
