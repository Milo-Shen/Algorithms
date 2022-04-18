pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
    let arr_len = nums.len() as i32;
    if arr_len == 0 {
        return -1;
    }

    let max_value = nums[(arr_len - 1) as usize];
    if target > max_value {
        return arr_len;
    }

    let mut start = 0;
    let mut end = arr_len - 1;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        let mid_ele = nums[mid as usize];
        if mid_ele >= target {
            end = mid;
        } else {
            start = mid;
        }
    }

    if nums[start as usize] >= target {
        return start;
    }

    if nums[end as usize] >= target {
        return end;
    }

    -1
}