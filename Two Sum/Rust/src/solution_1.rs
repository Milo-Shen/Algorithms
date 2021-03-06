use std::collections::HashMap;

pub fn solution(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let nums_len = nums.len();
    let mut hash: HashMap<i32, i32> = HashMap::with_capacity(nums_len);
    for i in 0..nums_len {
        let remain = target - nums[i];
        if let Some(val) = hash.get(&remain) {
            return vec![*val, i as i32];
        }
        hash.insert(nums[i], i as i32);
    }

    panic!("not found");
}