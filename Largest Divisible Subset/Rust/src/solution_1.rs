// https://leetcode.cn/problems/largest-divisible-subset/
// https://www.lintcode.com/problem/603

use std::collections::{HashMap, VecDeque};

pub fn largest_divisible_subset(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    if n == 0 {
        return Vec::new();
    }

    let mut nums = nums;
    nums.sort();

    let mut dp: HashMap<i32, i32> = HashMap::new();
    let mut prev: HashMap<i32, i32> = HashMap::new();

    for &num in &nums {
        dp.insert(num, 1);
        prev.insert(num, -1);
    }

    let mut last_num = nums[0];

    for &num in &nums {
        for factor in get_factors(num) {
            if !dp.contains_key(&factor) {
                continue;
            }

            let factor_count = *dp.get(&factor).unwrap() + 1;
            if *dp.get(&num).unwrap() < factor_count {
                dp.insert(num, factor_count);
                prev.insert(num, factor);
            }
        }

        if *dp.get(&num).unwrap() > *dp.get(&last_num).unwrap() {
            last_num = num;
        }
    }

    let mut answer = VecDeque::new();
    while last_num != -1 {
        answer.push_front(last_num);
        last_num = *prev.get(&last_num).unwrap();
    }

    answer.into_iter().collect()
}

fn get_factors(num: i32) -> Vec<i32> {
    if num == 1 {
        return vec![];
    }

    let mut factors = Vec::new();
    let mut factor = 1;

    while factor * factor <= num {
        if num % factor == 0 {
            factors.push(factor);

            if factor * factor != num && factor != 1 {
                factors.push(num / factor)
            }
        }

        factor += 1;
    }

    factors
}
