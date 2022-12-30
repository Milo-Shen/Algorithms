pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
    let rows = matrix.len();
    if rows == 0 {
        return false;
    }

    let cols = matrix[0].len();
    if cols == 0 {
        return false;
    }

    let mut x = rows - 1;
    let mut y = 0;

    while x >= 0 && y < cols {
        if matrix[x][y] == target {
            return true;
        } else if matrix[x][y] > target {
            if x == 0 {
                return false;
            }
            x -= 1;
        } else {
            y += 1
        }
    }

    false
}