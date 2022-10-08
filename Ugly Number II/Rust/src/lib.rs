pub struct MinHeap {
    pub array: Vec<i64>,
}

impl MinHeap {
    pub fn new() -> Self {
        Self {
            array: Vec::new()
        }
    }

    pub fn siftup(&mut self, mut k: usize) {
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

    pub fn siftdown(&mut self, mut k: usize) {
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

    pub fn push(&mut self, value: i64) {
        let index = self.array.len();
        self.array.push(value);
        self.siftup(index);
    }

    pub fn peek(&self) -> Option<i64> {
        if self.array.len() == 0 {
            None
        } else {
            Some(self.array[0])
        }
    }

    pub fn pop(&mut self) -> Option<i64> {
        if self.array.len() == 0 {
            return None;
        }

        let first = self.array[0];
        let last = self.array.pop().unwrap();

        if first != last {
            self.array[0] = last;
            self.siftdown(0);
        }

        Some(first)
    }
}