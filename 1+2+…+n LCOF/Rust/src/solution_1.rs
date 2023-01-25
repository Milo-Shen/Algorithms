// https://leetcode.cn/problems/qiu-12n-lcof/

pub fn sum_nums(n: i32) -> i32 {
    if n == 0 { 0 } else { n + sum_nums(n - 1) }
}