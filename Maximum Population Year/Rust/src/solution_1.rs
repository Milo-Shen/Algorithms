// https://leetcode.cn/problems/maximum-population-year/

pub fn maximum_population(logs: Vec<Vec<i32>>) -> i32 {
    let mut year = Vec::with_capacity(101);

    for _ in 0..101 {
        year.push(0);
    }

    for log in logs {
        let birth = log[0];
        let death = log[1];

        for i in birth..death {
            let pos = (i - 1950) as usize;
            year[pos] = year[pos] + 1;
        }
    }

    let mut max = i32::MIN;
    let mut index = 0;

    for i in 0..101 {
        if max >= year[i] {
            continue;
        }

        max = year[i];
        index = i;
    }

    index as i32 + 1950
}