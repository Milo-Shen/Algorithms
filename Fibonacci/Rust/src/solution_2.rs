use std::collections::HashMap;

// 1. 递归的定义: 函数接受什么样的参数，返回什么样的值，代表什么样的意思
pub fn fibonacci_memory(hash: &mut HashMap<usize, usize>, n: usize) -> usize {
    // 3. 递归的出口
    if n <= 2 {
        return n - 1;
    }

    if let Some(value) = hash.get(&n) {
        return *value;
    }

    let result = fibonacci_memory(hash, n - 1) + fibonacci_memory(hash, n - 2);
    hash.insert(n, result);

    // 2. 递归的拆解
    return result;
}