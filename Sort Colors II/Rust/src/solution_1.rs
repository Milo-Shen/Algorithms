// https://www.lintcode.com/problem/143/

// 采用计数排序的思想来解答
pub fn sort_colors2(nums: &mut Vec<i32>, k: usize) {
    let nums_len = nums.len();
    if nums_len == 0 {
        return;
    }

    // 统计每个数字出现的次数
    let mut count: Vec<i32> = Vec::new();
    for _ in 0..k {
        count.push(0)
    }

    for i in 0..nums_len {
        let pos = (nums[i] - 1) as usize;
        count[pos] = count[pos] + 1;
    }

    // 对数组进行重新排序
    let mut index = 0;
    for i in 1..k + 1 {
        for j in 0..count[i - 1] {
            nums[index] = i as i32;
            index = index + 1;
        }
    }
}