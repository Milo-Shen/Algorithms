// https://leetcode.cn/problems/count-the-digits-that-divide-a-number/

pub fn count_digits(num: i32) -> i32 {
    let mut answer = 0;
    let mut number = num;

    while number > 0 {
        if num % (number % 10) == 0 {
            answer += 1;
        }
        number /= 10;
    }

    answer
}