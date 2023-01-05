// https://www.lintcode.com/problem/140/description

pub fn fast_power(a: i32, b: i32, n: i32) -> i32 {
    let mut answer: i64 = 1;
    let mut temp = a as i64;
    let mut n = n;
    let b = b as i64;

    while n != 0 {
        if n % 2 == 1 {
            answer = (answer * temp) % b;
        }

        temp = (temp * temp) % b;
        n = n / 2;
    }

    (answer % b) as i32
}