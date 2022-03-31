// https://www.lintcode.com/problem/80/

pub fn solution(nums: Vec<i32>) -> i32 {
    let nums_len = nums.len();
    if nums_len == 0 {
        return -1;
    }

    let k = nums_len / 2;
    let middle = if nums_len % 2 == 0 { k } else { k + 1 };
    let mut nums_arr = nums;
    quick_sort(&mut nums_arr, 0, (nums_len - 1) as i32, middle as i32)
}

fn quick_sort(arr: &mut Vec<i32>, start: i32, end: i32, k: i32) -> i32 {
    if start == end {
        return arr[start as usize];
    }

    let mut left = start;
    let mut right = end;
    let pivot = arr[((left + right) / 2) as usize];

    while left <= right {
        while left <= right && arr[left as usize] < pivot {
            left = left + 1;
        }

        while left <= right && arr[right as usize] > pivot {
            right = right - 1;
        }

        if left <= right {
            let temp = arr[left as usize];
            arr[left as usize] = arr[right as usize];
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

    arr[(right + 1) as usize]
}