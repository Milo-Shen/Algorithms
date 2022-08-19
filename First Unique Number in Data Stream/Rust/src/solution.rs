use std::collections::HashMap;

pub fn first_unique_number(nums: Vec<i32>, number: i32) -> i32 {
    // 特殊情况处理
    let nums_len = nums.len();
    if nums_len == 0 {
        return -1;
    }

    let mut map: HashMap<i32, i32> = HashMap::new();

    for num in nums.iter() {
        let count = *map.get(num).unwrap_or(&0) + 1;
        map.insert(*num, count);
        if *num == number {
            break;
        }
    }

    if !map.contains_key(&number) {
        return -1;
    }

    for num in nums.iter() {
        if *map.get(num).unwrap() == 1 {
            return *num;
        }
    }

    -1
}