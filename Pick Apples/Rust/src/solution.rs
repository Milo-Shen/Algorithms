// https://www.lintcode.com/problem/1850/description

use std::cmp::max;

pub fn pick_apples(a: Vec<i32>, k: i32, l: i32) -> i32 {
    // 异常检测
    let a_len = a.len();
    if a_len == 0 {
        return -1;
    }

    // 最大苹果数量
    let mut max_count = -1;

    // 使用隔板法
    for i in 0..a_len {
        // 枚举隔板 [0, i) [i, n)
        let left_k = get_apples(&a, 0, i, k as usize);
        let right_l = get_apples(&a, i, a_len, l as usize);
        let left_l = get_apples(&a, 0, i, l as usize);
        let right_k = get_apples(&a, i, a_len, k as usize);

        if left_k != -1 && right_l != -1 {
            max_count = max(max_count, left_k + right_l);
        }

        if left_l != -1 && right_k != -1 {
            max_count = max(max_count, left_l + right_k);
        }
    }

    max_count
}

fn get_apples(a: &Vec<i32>, left: usize, right: usize, gap: usize) -> i32 {
    // 异常处理
    if right - left < gap {
        return -1;
    }

    // 初始化最大苹果数量
    let mut count = 0;
    let mut max_count = 0;

    let iter_end = left + gap;
    for i in left..iter_end {
        count = count + a[i];
    }

    max_count = count;

    // 同向双指针
    let mut start = left;
    let mut end = left + gap;

    while end < right {
        count = count + a[end];
        count = count - a[start];
        max_count = max(max_count, count);

        start = start + 1;
        end = end + 1;
    }

    return max_count;
}
