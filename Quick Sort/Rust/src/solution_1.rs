pub fn solution(nums: Vec<i32>) -> Vec<i32> {
    let nums_len = nums.len();
    if nums_len == 0 {
        panic!("empty array");
    }

    let mut nums_arr = nums;
    quick_sort(&mut nums_arr, 0, (nums_len - 1) as i32);

    nums_arr
}

fn quick_sort(arr: &mut Vec<i32>, start: i32, end: i32) {
    if start >= end {
        return;
    }

    let mut left = start;
    let mut right = end;
    let pivot = arr[((start + end) / 2) as usize];

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

    quick_sort(arr, start, right);
    quick_sort(arr, left, end);
}