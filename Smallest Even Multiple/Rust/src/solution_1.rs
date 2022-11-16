// https://leetcode.cn/problems/smallest-even-multiple/comments/

pub fn smallest_even_multiple(n: i32) -> i32 {
    ((n % 2) + 1) * n
}