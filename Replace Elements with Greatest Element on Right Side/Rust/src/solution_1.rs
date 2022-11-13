// https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side/

pub fn replace_elements(arr: Vec<i32>) -> Vec<i32> {
    let mut max = -1;
    let mut arr = arr;

    for i in (0..arr.len()).rev() {
        let mut num = arr[i];
        arr[i] = max;
        max = if num > max { num } else { max }
    }

    arr
}