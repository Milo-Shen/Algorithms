// https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/submissions/
pub fn peak_index_in_mountain_array(arr: Vec<i32>) -> i32 {
    let arr_len = arr.len();
    if arr_len == 0 {
        return -1;
    };

    let mut start = 0;
    let mut end = (arr_len - 1) as i32;

    while start + 1 < end {
        let mid = ((start + end) / 2) as usize;
        if arr[mid] > arr[mid + 1] {
            end = mid as i32
        } else {
            start = mid as i32
        }
    }

    if arr[start as usize] > arr[end as usize] { start } else { end }
}