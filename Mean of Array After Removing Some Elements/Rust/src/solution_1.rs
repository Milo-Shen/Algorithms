// https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/

pub fn trim_mean(arr: Vec<i32>) -> f64 {
    let len = arr.len();

    if len == 0 {
        return 0 as f64;
    }

    let mut arr = arr;
    arr.sort();

    let start = (len as f64 * 0.05) as usize;
    let end = len - start;
    let remain_len = end - start;

    let mut total = 0;

    for i in start..end {
        total = total + arr[i];
    }

    total as f64 / remain_len as f64
}