use std::collections::HashMap;

// Rust 面向对象编程
#[derive(Debug)]
pub struct TwoSum {
    hash_map: HashMap<i32, i32>,
}

impl TwoSum {
    pub fn new() -> Self {
        Self {
            hash_map: HashMap::new()
        }
    }

    pub fn add(&mut self, value: i32) {
        let mut count = 1;
        if let Some(_value) = self.hash_map.get(&value) {
            count = *_value + 1;
        }
        self.hash_map.insert(value, count);
    }

    pub fn find(&self, target: i32) -> bool {
        for (&cur_num, _) in &self.hash_map {
            let remain_num = target - cur_num;
            let nums_count = if remain_num == cur_num { 2 } else { 1 };
            if let Some(count) = self.hash_map.get(&remain_num) {
                if *count >= nums_count {
                    return true;
                }
            }
        }
        false
    }
}