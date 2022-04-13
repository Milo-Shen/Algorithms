// https://leetcode-cn.com/problems/find-k-closest-elements/

pub fn find_closest_elements(arr: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
    let right = find_upper_closest(&arr, x);
    let left = right - 1;


    vec![]
}

fn find_upper_closest(arr: &Vec<i32>, target: i32) -> i32 {
    let arr_len = arr.len() as i32;

    let mut start = 0;
    let mut end = arr_len - 1;

    while start + 1 < end {
        let mid = start + (start + end) / 2;
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

fn is_left_closer(arr: &Vec<i32>, target: i32, left: usize, right: usize) -> bool {
    true
}