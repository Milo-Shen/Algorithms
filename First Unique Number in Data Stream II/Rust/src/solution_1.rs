use std::collections::HashMap;

pub struct FirstUnique {
    pub nums: Vec<i32>,
    pub map: HashMap<i32, i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FirstUnique {
    fn new(nums: Vec<i32>) -> Self {
        let mut map: HashMap<i32, i32> = HashMap::new();

        for i in 0..nums.len() {
            let value = nums[i];

            let mut total = 1;
            if let Some(&count) = map.get(&value) {
                total = total + count;
            }

            map.insert(value, total);
        }

        Self { nums, map }
    }

    fn show_first_unique(&self) -> i32 {
        let nums_len = self.nums.len();

        // 特殊情况处理
        if nums_len == 0 {
            return -1;
        }

        for i in 0..nums_len {
            let value = self.nums[i];
            if let Some(&count) = self.map.get(&value) {
                if count == 1 {
                    return value;
                }
            }
        }

        -1
    }

    fn add(&mut self, value: i32) {
        self.nums.push(value);

        let mut total = 1;
        if let Some(&count) = self.map.get(&value) {
            total = total + count;
        }

        self.map.insert(value, total);
    }
}
