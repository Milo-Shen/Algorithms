// https://leetcode.cn/problems/climbing-stairs/

pub fn climb_stairs(n: i32) -> i32 {
    let mut a = 1;
    let mut b = 2;

    if n == 1 {
        return a;
    }

    if n == 2 {
        return b;
    }

    let mut temp = 0;

    for i in 3..(n + 1) {
        temp = a;
        a = b;
        b = temp + a;
    }

    b
}