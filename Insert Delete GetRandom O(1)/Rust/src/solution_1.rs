use std::collections::HashMap;

pub struct RandomizedSet {
    // 存放数字
    nums: Vec<i32>,
    // num => index, 存放数字在 nums 中所对应的下标
    nums_to_index_map: HashMap<i32, usize>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedSet {
    pub fn new() -> Self {
        Self {
            nums: Vec::new(),
            nums_to_index_map: HashMap::new(),
        }
    }

    pub fn insert(&self, val: i32) -> bool {
        false
    }

    pub fn remove(&self, val: i32) -> bool {
        false
    }

    pub fn get_random(&self) -> i32 {
        -1
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = RandomizedSet::new();
 * let ret_1: bool = obj.insert(val);
 * let ret_2: bool = obj.remove(val);
 * let ret_3: i32 = obj.get_random();
 */