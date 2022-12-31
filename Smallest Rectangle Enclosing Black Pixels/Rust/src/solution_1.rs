// https://leetcode.cn/problems/smallest-rectangle-enclosing-black-pixels/
// https://www.lintcode.com/problem/600/

pub fn min_area(image: Vec<Vec<char>>, x: i32, y: i32) -> i32 {
    let n = image.len();
    if n == 0 {
        return 0;
    }

    let m = image[0].len();
    if m == 0 {
        return 0;
    }

    let left = find_first(&image, 0, y, check_column);
    let right = find_last(&image, y, m as i32 - 1, check_column);
    let up = find_first(&image, 0, x, check_row);
    let down = find_last(&image, x, n as i32 - 1, check_row);

    (right - left + 1) * (down - up + 1)
}

fn check_column(image: &Vec<Vec<char>>, col: usize) -> bool {
    for i in 0..image.len() {
        if image[i][col] == '1' {
            return true;
        }
    }

    false
}

fn check_row(image: &Vec<Vec<char>>, row: usize) -> bool {
    for j in 0..image[0].len() {
        if image[row][j] == '1' {
            return true;
        }
    }

    false
}

fn find_first(image: &Vec<Vec<char>>, start: i32, end: i32, check_func: fn(&Vec<Vec<char>>, usize) -> bool) -> i32 {
    let mut start = start;
    let mut end = end;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if check_func(&image, mid as usize) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if check_func(&image, start as usize) {
        return start;
    }

    end
}

fn find_last(image: &Vec<Vec<char>>, start: i32, end: i32, check_func: fn(&Vec<Vec<char>>, usize) -> bool) -> i32 {
    let mut start = start;
    let mut end = end;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if check_func(&image, mid as usize) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if check_func(&image, end as usize) {
        return end;
    }

    start
}