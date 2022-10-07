// https://leetcode.cn/problems/count-primes/comments/

pub fn count_primes(n: i32) -> i32 {
    let mut res = 0;
    let mut flag = Vec::with_capacity(n as usize);

    for _ in 0..n {
        flag.push(true);
    }

    for i in 2..n as usize {
        if flag[i] == true {
            let mut j = 2 * i;
            loop {
                if j >= n as usize {
                    break;
                }

                flag[j] = false;
                j = j + i;
            }
            res = res + 1;
        }
    }

    res
}