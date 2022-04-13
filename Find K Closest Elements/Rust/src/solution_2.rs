// // https://leetcode-cn.com/problems/find-k-closest-elements/

pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
    let mut right = find_upper_closest(&arr, x);
    let mut left = right - 1;

    // 两个指针从中间往两边扩展, 依次找到最接近的 k 个数
    let mut result: Vec<i32> = Vec::new();
    for _ in 0..k {
        if is_left_closer(&arr, x, left, right) {
            result.push(arr[left as usize]);
            left = left - 1;
        } else {
            result.push(arr[right as usize]);
            right = right + 1;
        }
    }

    result.sort();

    result
}

fn find_upper_closest(arr: &Vec<i32>, target: i32) -> i32 {
    let arr_len = arr.len() as i32;

    let mut start = 0;
    let mut end = arr_len - 1;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        let mid_ele = arr[mid as usize];
        if mid_ele >= target {
            end = mid;
        } else {
            start = mid;
        }
    }

    if arr[start as usize] >= target {
        return start;
    }

    if arr[end as usize] >= target {
        return end;
    }

    arr_len
}

fn is_left_closer(arr: &Vec<i32>, target: i32, left: i32, right: i32) -> bool {
    // 如果左边已经耗尽，返回 false
    if left < 0 {
        return false;
    }

    // 如果右边耗尽, 返回 true
    if right >= arr.len() as i32 {
        return true;
    }

    return target - arr[left as usize] <= arr[right as usize] - target;
}