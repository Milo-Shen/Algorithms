// https://leetcode.cn/problems/jump-game-iv/

use std::collections::{VecDeque, HashMap, HashSet};

pub fn min_jumps(arr: Vec<i32>) -> i32 {
    let arr_len = arr.len();

    // 异常检测
    if arr_len == 0 {
        return -1;
    }

    if arr_len == 1 {
        return 0;
    }

    let mut same_pos = get_same_val_pos(&arr);

    let mut min_step = -1;
    let mut queue = VecDeque::from([0]);
    let mut visited = HashSet::from([0]);

    while !queue.is_empty() {
        // 当前层有 queue_len 个元素
        let queue_len = queue.len();
        min_step += 1;

        for _ in 0..queue_len {
            let index = queue.pop_front().unwrap();

            if index == arr_len - 1 {
                return min_step;
            }

            let next_pos_index = get_next_position(&arr, index, &visited, &mut same_pos);
            for next_index in next_pos_index {
                if visited.contains(&next_index) {
                    continue;
                }

                queue.push_back(next_index);
                visited.insert(next_index);
            }
        }
    }

    -1
}

fn get_same_val_pos(arr: &Vec<i32>) -> HashMap<i32, Vec<usize>> {
    let mut map: HashMap<i32, Vec<usize>> = HashMap::new();

    for (index, val) in arr.iter().enumerate() {
        if map.contains_key(val) {
            map.get_mut(&val).unwrap().push(index);
            continue;
        }

        map.insert(*val, vec![index]);
    }

    map
}

fn get_next_position(arr: &Vec<i32>, index: usize, visited: &HashSet<usize>, same_pos: &mut HashMap<i32, Vec<usize>>) -> Vec<usize> {
    let mut next_position = Vec::new();

    let left_index = index as i32 - 1;
    let right_index = index + 1;

    if left_index >= 0 && !visited.contains(&(left_index as usize)) {
        next_position.push(left_index as usize);
    }

    if right_index < arr.len() && !visited.contains(&right_index) {
        next_position.push(right_index);
    }

    let same_index = same_pos.get(&arr[index]).unwrap();
    for &idx in same_index {
        if !visited.contains(&idx) && idx != left_index as usize && idx != right_index {
            next_position.push(idx);
        }
    }

    same_pos.insert(arr[index], Vec::new());

    next_position
}