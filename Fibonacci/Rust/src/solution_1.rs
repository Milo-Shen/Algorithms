pub fn fibonacci(n: i32) -> i32 {
    if n <= 2 {
        return n - 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}