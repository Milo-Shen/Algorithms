// https://leetcode.cn/problems/IlPe0q/
// https://www.lintcode.com/problem/109/

pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
    let mut min = i32::MAX;
    traverse(&triangle, 0, 0, 0, &mut min);
    min
}

fn traverse(triangle: &Vec<Vec<i32>>, x: usize, y: usize, path_sum: i32, min: &mut i32) {
    if x == triangle.len() {
        *min = if *min > path_sum { path_sum } else { *min };
        return;
    }

    traverse(triangle, x + 1, y, path_sum + triangle[x][y], min);
    traverse(triangle, x + 1, y + 1, path_sum + triangle[x][y], min);
}