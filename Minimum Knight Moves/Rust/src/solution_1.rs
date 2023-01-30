// https://leetcode.cn/problems/minimum-knight-moves/

use std::collections::{HashSet, VecDeque};

pub fn min_knight_moves(x: i32, y: i32) -> i32 {
    // 异常检测
    if x == 0 && y == 0 {
        return 0;
    }

    // 准备国际象棋的 8 个方位的走法
    let directions = [
        (1, 2),
        (1, -2),
        (-1, 2),
        (-1, -2),
        (2, 1),
        (2, -1),
        (-2, 1),
        (-2, -1)
    ];

    // 起点和终点
    let source = (0, 0);
    let destination = (x, y);

    // 最短路径数量
    let mut distance = 0;

    // 双向宽度有点搜索
    let mut forward_queue = VecDeque::from([source]);
    let mut forward_set = HashSet::from([source]);
    let mut backward_queue = VecDeque::from([destination]);
    let mut backward_set = HashSet::from([destination]);

    while !forward_queue.is_empty() && !backward_queue.is_empty() {
        distance += 1;
        if extend_queue(&mut forward_queue, &mut forward_set, &backward_set, &directions) {
            return distance;
        }

        distance += 1;
        if extend_queue(&mut backward_queue, &mut backward_set, &forward_set, &directions) {
            return distance;
        }
    }

    -1
}

fn extend_queue(
    queue: &mut VecDeque<(i32, i32)>,
    visited: &mut HashSet<(i32, i32)>,
    opposite_visited: &HashSet<(i32, i32)>,
    directions: &[(i32, i32); 8],
) -> bool {
    let len = queue.len();

    for i in 0..len {
        let (coordinate_x, coordinate_y) = queue.pop_front().unwrap();

        // 国际象棋的走法 ( 8 个方位进行 bfs )
        for j in 0..8 {
            let (delta_x, delta_y) = directions[j];
            let new_coordinate_x = coordinate_x + delta_x;
            let new_coordinate_y = coordinate_y + delta_y;
            let new_coordinate = (new_coordinate_x, new_coordinate_y);

            if visited.contains(&new_coordinate) {
                continue;
            }

            if opposite_visited.contains(&new_coordinate) {
                return true;
            }

            queue.push_back(new_coordinate);
            visited.insert(new_coordinate);
        }
    }

    false
}