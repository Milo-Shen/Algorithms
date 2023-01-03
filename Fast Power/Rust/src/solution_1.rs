// https://www.lintcode.com/problem/140/description

pub fn fast_power(a: i32, b: i32, n: i32) -> i32 {
    // ( a + b ) % c = ( a % c + b % c ) % c
    // ( a * b ) % c = ( a % c * b % c ) % c
    // ( a - b ) % c = ( a % c - b % c + c ) % c
    // ( a - b ) % c = ( ( ( a % c - b % c ) % c ) + c ) % c
    // 除法不符合上述公式
    // a^n = (a^n / 2) ^ 2   n % 2 === 0
    // a^n = ( (a^n / 2) ^ 2 ) * a   n % 2 === 1

    if n == 0 {
        return 1 % b;
    }

    if n == 1 {
        return a % b;
    }

    let mut product = fast_power(a, b, n / 2) as i64;
    let b = b as i64;
    product = ((product % b) * (product % b)) % b;

    if n % 2 == 1 {
        product = (product * (a as i64)) % b;
    }

    product as i32
}