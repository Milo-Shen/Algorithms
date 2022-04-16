// https://www.lintcode.com/problem/183/
// 思考:
//  1. 不要一开始算出所有的结果，而是二分的时候在过程中算
//  2. 二分的要求，最重要的还是确定左右边界，所以这边最重要的是确定右边界

pub fn wood_cut(l: Vec<i32>, k: i32) -> i32 {
    let wood_arr_len = l.len() as i32;
    if wood_arr_len == 0 {
        return 0;
    }

    let mut max_val = l[0] as i64;
    let mut wood_total: i64 = 0;
    for (_, &val) in l.iter().enumerate() {
        wood_total = wood_total + val as i64;
        if max_val < val as i64 {
            max_val = val as i64;
        }
    }

    let max_wood_count = wood_total / k as i64;
    let end: i64 = if max_val < max_wood_count { max_val } else { max_wood_count };

    // 如果切割不出来，返回 0
    if end < 1 {
        return 0;
    }

    find_upper_farthest(&l, 1, end, k)
}

fn find_upper_farthest(l: &Vec<i32>, left: i64, right: i64, target: i32) -> i32 {
    let mut start = left;
    let mut end = right;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        let wood_count = cal_wood_count(l, mid);

        if wood_count > target {
            start = mid;
        }

        if wood_count == target {
            start = mid;
        }

        if wood_count < target {
            end = mid;
        }
    }

    if cal_wood_count(l, end) >= target {
        return end as i32;
    }

    if cal_wood_count(l, start) >= target {
        return start as i32;
    }

    0
}

fn cal_wood_count(l: &Vec<i32>, length: i64) -> i32 {
    // 除数 length 一定要校验是否为 0
    if length == 0 {
        return 0;
    }

    let l_len = l.len();
    let mut total = 0;

    for i in 0..l_len {
        // 除数 length 一定要校验是否为 0
        total = total + ((l[i] as i64) / length);
    }

    total as i32
}