// https://leetcode.cn/problems/ugly-number-ii/

use std::collections::{HashSet};
use rust::MinHeap;

pub fn nth_ugly_number(n: i64) -> i64 {
    let mut heap = MinHeap::new();
    let mut set = HashSet::new();
    let factors: [i64; 3] = [2, 3, 5];

    heap.push(1);
    set.insert(1);

    let mut cur_ugly: i64 = 1;
    let mut new_ugly: i64;

    for _ in 0..n {
        cur_ugly = heap.pop().unwrap();

        for factor in factors {
            new_ugly = cur_ugly * factor;
            if !set.contains(&new_ugly) {
                set.insert(new_ugly);
                heap.push(new_ugly);
            }
        }
    }

    cur_ugly as i64
}
