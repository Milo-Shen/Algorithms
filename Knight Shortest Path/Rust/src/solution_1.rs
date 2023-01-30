// https://www.lintcode.com/problem/611/
// lint code 上这题输入的 grid 是 boolean 数组, source 和 destination 是 Point 实例, 这个需要注意
// 另外一个则是 grid 是 boolean 数组，而非 0, 1 数组，和题目介绍不一样

use std::collections::{HashSet, VecDeque};

#[derive(Debug, PartialEq, Eq)]
pub struct Point {
    pub x: i32,
    pub y: i32,
}

impl Point {
    #[inline]
    pub fn new(x: i32, y: i32) -> Self {
        Point { x, y }
    }
}

pub fn shortest_path(grid: Vec<Vec<bool>>, source: Point, destination: Point) -> i32 {
    // 异常检测
    let rows = grid.len();
    if rows == 0 {
        return -1;
    }

    let cols = grid[0].len();
    if cols == 0 {
        return -1;
    }

    if grid[destination.x as usize][destination.y as usize] {
        return -1;
    }

    if source.x == destination.x && source.y == destination.y {
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
    let source_hash = source.x * cols as i32 + source.y;
    let destination_hash = destination.x * cols as i32 + destination.y;

    // 双向宽度优先搜索
    let mut distance = 0;
    let mut forward_queue = VecDeque::from([source]);
    let mut forward_set = HashSet::from([source_hash]);
    let mut backward_queue = VecDeque::from([destination]);
    let mut backward_set = HashSet::from([destination_hash]);

    while !forward_queue.is_empty() && !backward_queue.is_empty() {
        distance += 1;
        if extend_queue(&grid, &mut forward_queue, &mut forward_set, &backward_set, &directions) {
            return distance;
        }

        distance += 1;
        if extend_queue(&grid, &mut backward_queue, &mut backward_set, &forward_set, &directions) {
            return distance;
        }
    }

    -1
}

fn extend_queue(
    grid: &Vec<Vec<bool>>,
    queue: &mut VecDeque<Point>,
    visited: &mut HashSet<i32>,
    opposite_visited: &HashSet<i32>,
    directions: &[(i32, i32); 8],
) -> bool {
    let len = queue.len();
    let cols = grid[0].len();

    for _ in 0..len {
        let node = queue.pop_front().unwrap();

        // 对国际象棋的 8 个方向进行 BFS
        for i in 0..8 {
            let (delta_x, delta_y) = directions[i];
            let new_x = node.x + delta_x;
            let new_y = node.y + delta_y;
            let new_hash = new_x * cols as i32 + new_y;

            if !is_valid(&grid, new_x, new_y, &visited, new_hash) {
                continue;
            }

            if opposite_visited.contains(&new_hash) {
                return true;
            }

            queue.push_back(Point::new(new_x, new_y));
            visited.insert(new_hash);
        }
    }

    false
}

fn is_valid(grid: &Vec<Vec<bool>>, x: i32, y: i32, visited: &HashSet<i32>, hash: i32) -> bool {
    let rows = grid.len();
    let cols = grid[0].len();

    if x < 0 || x >= rows as i32 {
        return false;
    }

    if y < 0 || y >= cols as i32 {
        return false;
    }

    if grid[x as usize][y as usize] {
        return false;
    }

    if visited.contains(&hash) {
        return false;
    }

    true
}