// https://leetcode.cn/problems/grumpy-bookstore-owner/
// https://www.lintcode.com/problem/1849/

pub fn max_satisfied(customers: Vec<i32>, grumpy: Vec<i32>, minutes: i32) -> i32 {
    // 异常检测
    let customers_lens = customers.len();
    if customers_lens == 0 {
        return 0;
    }

    // 当前满意度
    let mut sum = 0;

    // 初始化满意的客户数量
    for i in 0..customers_lens {
        if i < minutes as usize {
            sum = sum + customers[i];
        } else {
            sum = sum + customers[i] * (1 - grumpy[i]);
        }
    }

    // 最大满意度
    let mut max_sum = sum;

    // 同向双指针
    let mut left = 0;
    let mut right = minutes as usize;

    while right < customers_lens {
        if grumpy[right] == 1 {
            sum = sum + customers[right];
        }

        if grumpy[left] == 1 {
            sum = sum - customers[left];
        }

        max_sum = if max_sum < sum { sum } else { max_sum };

        left = left + 1;
        right = right + 1;
    }

    max_sum
}