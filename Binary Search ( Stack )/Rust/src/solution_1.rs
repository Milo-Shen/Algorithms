// https://leetcode-cn.com/problems/binary-search/
// https://www.lintcode.com/problem/457/

pub fn binary_search(nums: Vec<i32>, target: i32) -> i32 {
    let nums_len = nums.len();
    if nums_len == 0 {
        return -1;
    }

    let mut start = 0;
    let mut end = (nums_len - 1) as i32;

    // 要点 1: start + 1 < end
    // 在二分问题中，最常见的错误就是死循环。而这个模版一定不会出现死循环。为什么呢 ?
    // 因为我们这边使用了 `start + 1 < end`, 而不是 `start < end` 或者 `start <= end`
    // 通过 `while` 循环，将区间范围从 `n` 缩小到 `2` （只有 `start` 和 `end` 两个点）。
    // 在 `start` 和 `end` 中判断是否有解。
    // 而普通的 `start < end` 或者 `start <= end` 在寻找目标最后一次出现的位置的时候，可能出现死循环。
    while start + 1 < end {
        let mid = start + (end - start) / 2;
        let mid_val = nums[mid as usize];

        if mid_val == target {
            end = mid;
        } else if mid_val > target {
            end = mid
        } else {
            start = mid;
        }
    }

    if nums[start as usize] == target {
        return start;
    }

    if nums[end as usize] == target {
        return end;
    }

    return -1;
}