use std::collections::HashMap;

pub fn four_sum_count(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>, nums4: Vec<i32>) -> i32 {
    let max_arr_len = nums1.len();
    if max_arr_len == 0 {
        return 0;
    }

    // 使用 two sum 的逻辑即可解决
    let mut hash: HashMap<i32, i32> = HashMap::new();
    for i in 0..max_arr_len {
        for j in 0..max_arr_len {
            let mut total = 1;
            let sum = nums1[i] + nums2[j];
            if let Some(&value) = hash.get(&sum) {
                total = total + value;
            }
            hash.insert(sum, total);
        }
    }

    let mut total = 0;
    for i in 0..max_arr_len {
        for j in 0..max_arr_len {
            let target = -(nums3[i] + nums4[j]);
            if let Some(&value) = hash.get(&target) {
                total = total + value;
            }
        }
    }

    total
}