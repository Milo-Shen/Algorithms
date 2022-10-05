// https://leetcode.cn/problems/ugly-number/

pub fn is_ugly(n: i32) -> bool {
    let mut n = n;

    if n < 1 {
        return false;
    }

    while n % 5 == 0 {
        n = n / 5;
    }

    while n % 3 == 0 {
        n = n / 3;
    }

    while n % 2 == 0 {
        n = n / 2;
    }

    n == 1
}
