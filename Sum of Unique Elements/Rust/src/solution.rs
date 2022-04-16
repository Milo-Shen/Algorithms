use std::collections::HashMap;

pub fn sum_of_unique(nums: Vec<i32>) -> i32 {
    let nums_len = nums.len() as i32;
    if nums_len == 0 {
        return 0;
    }

    let mut hash: HashMap<i32, i32> = HashMap::new();
    for i in nums {
        let mut count = 1;
        if let Some(&value) = hash.get(&i) {
            count = value + 1;
        }
        hash.insert(i, count);
    }

    let mut sum = 0;
    for (num, count) in hash {
        if count == 1 {
            sum = sum + num;
        }
    }

    sum
}