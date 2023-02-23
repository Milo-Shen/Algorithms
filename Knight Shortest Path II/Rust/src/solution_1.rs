// https://www.lintcode.com/problem/630
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意
// 另外一个则是 grid 是 boolean 数组，而非 0, 1 数组，和题目介绍不一样

use std::collections::{HashSet, VecDeque};

pub fn shortest_path2(grid: Vec<Vec<bool>>) -> i32 {
    // 对异常进行处理
    let rows = grid.len() as i32;
    if rows == 0 {
        return -1;
    }

    let cols = grid[0].len() as i32;
    if cols == 0 {
        return -1;
    }

    // 往左走的 4 个方向
    let backward_directions = [
        (1, -2),
        (-1, -2),
        (2, -1),
        (-2, -1),
    ];

    // 往右走的 4 个方向
    let forward_directions = [
        (1, 2),
        (-1, 2),
        (2, 1),
        (-2, 1),
    ];

    // 如果重点就是障碍物，则返回 -1
    if grid[rows as usize - 1][cols as usize - 1] {
        return -1;
    }

    // 如果只有一个格子，那么答案就是 1
    if rows * cols == 1 {
        return 0;
    }

    // 起点和终点
    let source: (i32, i32) = (0, 0);
    let destination = (rows - 1, cols - 1);

    // 最短路径数
    let mut distance = 0;

    // 双向宽度优先搜索
    let mut forward_queue = VecDeque::from([source]);
    let mut backward_queue = VecDeque::from([destination]);
    let mut forward_set = HashSet::from([(source.0 * cols + source.1)]);
    let mut backward_set = HashSet::from([(destination.0 * cols + destination.1)]);

    while !forward_queue.is_empty() && !backward_queue.is_empty() {
        distance += 1;
        if extend_queue(&grid, &mut forward_queue, &mut forward_set, &mut backward_set, &forward_directions) {
            return distance;
        }

        distance += 1;
        if extend_queue(&grid, &mut backward_queue, &mut backward_set, &mut forward_set, &backward_directions) {
            return distance;
        }
    }

    -1
}

fn extend_queue(
    grid: &Vec<Vec<bool>>,
    queue: &mut VecDeque<(i32, i32)>,
    visited: &mut HashSet<i32>,
    opposite_set: &mut HashSet<i32>,
    directions: &[(i32, i32); 4],
) -> bool {
    let cols = grid[0].len() as i32;
    let length = queue.len() as i32;

    for _ in 0..length {
        let coordinate = queue.pop_front().unwrap();

        // 国际象棋的走法 ( 4 个方位进行 bfs )
        for &delta in directions {
            let new_coordinate_x = coordinate.0 + delta.0;
            let new_coordinate_y = coordinate.1 + delta.1;
            let flag = new_coordinate_x * cols + new_coordinate_y;

            if !is_valid(grid, visited, new_coordinate_x, new_coordinate_y, flag) {
                continue;
            }

            if opposite_set.contains(&flag) {
                return true;
            }

            queue.push_back((new_coordinate_x, new_coordinate_y));
            visited.insert(flag);
        }
    }

    false
}

fn is_valid(
    grid: &Vec<Vec<bool>>,
    visited: &HashSet<i32>,
    x: i32,
    y: i32,
    flag: i32,
) -> bool {
    // 计算行列
    let rows = grid.len() as i32;
    let cols = grid[0].len() as i32;

    if x < 0 || x >= rows || y < 0 || y >= cols {
        return false;
    }

    if grid[x as usize][y as usize] {
        return false;
    }


    !visited.contains(&flag)
}