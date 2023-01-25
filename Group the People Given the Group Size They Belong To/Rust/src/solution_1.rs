// https://leetcode.cn/problems/group-the-people-given-the-group-size-they-belong-to/

use std::collections::HashMap;

pub fn group_the_people(group_sizes: Vec<i32>) -> Vec<Vec<i32>> {
    let mut answer = Vec::new();
    let mut map = HashMap::new();

    for (i, &group_size) in group_sizes.iter().enumerate() {
        let index = find_group(&answer, &map, group_size);

        if index == -1 {
            map.insert(answer.len(), group_size);
            answer.push(vec![i as i32]);
        } else {
            answer[index as usize].push(i as i32);
        }
    }

    answer
}

fn find_group(answer: &Vec<Vec<i32>>, map: &HashMap<usize, i32>, num: i32) -> i32 {
    let answer_len = answer.len();

    if answer_len == 0 {
        return -1;
    }

    for i in 0..answer_len {
        if *map.get(&i).unwrap() == num && answer[i].len() < num as usize {
            return i as i32;
        }
    }

    -1
}