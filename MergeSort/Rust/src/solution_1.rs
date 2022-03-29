pub fn solution(nums: &mut Vec<i32>) {
    let nums_len = nums.len();
    if nums_len == 0 {
        panic!("empty array");
    }

    let mut temp: Vec<i32> = Vec::new();
    (0..nums_len).for_each(|_| temp.push(i32::MIN));
    let mut nums_arr = nums;
    merge_sort(&mut nums_arr, 0, nums_len - 1, &mut temp);
}

fn merge_sort(arr: &mut Vec<i32>, start: usize, end: usize, temp: &mut Vec<i32>) {
    if start >= end {
        return;
    }

    let middle = (start + end) / 2;
    merge_sort(arr, start, middle, temp);
    merge_sort(arr, middle + 1, end, temp);
    merge(arr, start, end, temp);
}

fn merge(arr: &mut Vec<i32>, start: usize, end: usize, temp: &mut Vec<i32>) {
    let middle = (start + end) / 2;
    let mut index = start;
    let mut left_index = start;
    let mut right_index = middle + 1;

    while left_index <= middle && right_index <= end {
        if arr[left_index] < arr[right_index] {
            temp[index] = arr[left_index];
            index = index + 1;
            left_index = left_index + 1;
        } else {
            temp[index] = arr[right_index];
            index = index + 1;
            right_index = right_index + 1;
        }
    }

    while left_index <= middle {
        temp[index] = arr[left_index];
        index = index + 1;
        left_index = left_index + 1;
    }

    while right_index <= end {
        temp[index] = arr[right_index];
        index = index + 1;
        right_index = right_index + 1;
    }

    for i in start..end + 1 {
        arr[i] = temp[i];
    }
}