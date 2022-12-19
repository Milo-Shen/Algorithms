// https://leetcode.cn/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

pub fn subtract_product_and_sum(n: i32) -> i32 {
    let mut n = n;
    let mut sum = 0;
    let mut product = 1;

    while n != 0 {
        let num = n % 10;
        n = n / 10;

        sum += num;
        product *= num;
    }

    product - sum
}