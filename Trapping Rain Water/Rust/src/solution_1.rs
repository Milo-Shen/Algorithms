pub fn trap(height: Vec<i32>) -> i32 {
    let arr_len = height.len();
    let mut total = 0;
    let mut i = 0;

    while i < arr_len && height[i] == 0 {
        i += 1;
    }

    let mut j = i + 1;

    while j < arr_len {
        if height[j] >= height[i] {
            let max_h = height[i].min(height[j]);
            for m in i + 1..j {
                total = total + max_h - height[m];
            }
            i = j;
        }
        j += 1;
    }

    let peak = i;
    i = arr_len - 1;

    while i >= peak && height[i] == 0 {
        i -= 1;
    }

    j = if i - 1 < 0 { 0 } else { i - 1 };

    while j >= peak {
        if height[j] >= height[i] {
            let max_h = height[i].min(height[j]);
            for m in (j + 1..i).rev() {
                total = total + max_h - height[m];
            }
            i = j;
        }
        j -= 1;
    }

    return total;
}
