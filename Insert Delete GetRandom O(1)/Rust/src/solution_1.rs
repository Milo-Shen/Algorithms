use std::collections::HashMap;
use rand::Rng;

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = RandomizedSet::new();
 * let ret_1: bool = obj.insert(val);
 * let ret_2: bool = obj.remove(val);
 * let ret_3: i32 = obj.get_random();
 */
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

    pub fn insert(&mut self, val: i32) -> bool {
        // 如果该数字已经存在, 返回 false
        if self.nums_to_index_map.contains_key(&val) {
            return false;
        }

        // 如果该数字不存在, 加入该数字, 返回 true
        self.nums_to_index_map.insert(val, self.nums.len());
        self.nums.push(val);
        return true;
    }

    pub fn remove(&mut self, val: i32) -> bool {
        // 如果这个数字不存在, 无需删除, 直接返回 false
        if !self.nums_to_index_map.contains_key(&val) {
            return false;
        }

        // 从 map 中得到 delete num 在 list 中所对应的 index
        let delete_index = *self.nums_to_index_map.get(&val).unwrap();

        // 如果 val 不是 nums 中的最后一个元素, 那么把最后一个元素放到 val 的位置
        let nums_len = self.nums.len();
        if delete_index < nums_len - 1 {
            // 用最后一个元素覆盖被删除的元素
            let last_num = *self.nums.last().unwrap();
            self.nums[delete_index] = last_num;
            // 把最后一个元素的指针指向新的 index
            self.nums_to_index_map.insert(last_num, delete_index);
        }

        // 删除指向被删除元素的指针
        self.nums_to_index_map.remove(&val);
        self.nums.pop();
        return true;
    }

    pub fn get_random(&self) -> i32 {
        let max = self.nums.len();
        let rnd = rand::thread_rng().gen_range(0, max);
        return self.nums[rnd];
    }
}