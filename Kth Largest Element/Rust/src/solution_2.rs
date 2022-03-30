// https://leetcode-cn.com/problems/find-the-kth-largest-integer-in-the-array/

pub fn solution(nums: Vec<String>, k: i32) -> String {
    let nums_len = nums.len();
    if nums_len == 0 {
        return String::from("-1");
    }

    let mut nums_arr = nums;
    quick_sort(&mut nums_arr, 0, (nums_len - 1) as i32, k)
}

fn quick_sort(arr: &mut Vec<String>, start: i32, end: i32, k: i32) -> String {
    if start == end {
        return arr[start as usize].clone();
    }

    let mut left = start;
    let mut right = end;
    let pivot = arr[((left + right) / 2) as usize].clone();

    while left <= right {
        while left <= right && string_compare_bigger(&arr[left as usize], &pivot) {
            left = left + 1;
        }

        while left <= right && string_compare_smaller(&arr[right as usize], &pivot) {
            right = right - 1;
        }

        if left <= right {
            let temp = arr[left as usize].clone();
            arr[left as usize] = arr[right as usize].clone();
            arr[right as usize] = temp;
            left = left + 1;
            right = right - 1;
        }
    }

    if start + k - 1 <= right {
        return quick_sort(arr, start, right, k);
    }

    if start + k - 1 >= left {
        return quick_sort(arr, left, end, k - (left - start));
    }

    arr[(right + 1) as usize].clone()
}

fn string_compare_bigger(a: &String, b: &String) -> bool {
    let a_len = a.len();
    let b_len = b.len();
    if a_len == b_len { a > b } else { a_len > b_len }
}

fn string_compare_smaller(a: &String, b: &String) -> bool {
    let a_len = a.len();
    let b_len = b.len();
    if a_len == b_len { a < b } else { a_len < b_len }
}