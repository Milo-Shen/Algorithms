pub fn copy_books_i_i(n: i32, times: Vec<i32>) -> i32 {
    if n == 0 {
        return 0;
    }

    let mut start = 0;
    let mut end = times[0] * n;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if can_finish(n, &times, mid) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if can_finish(n, &times, start) {
        return start;
    }

    end
}

fn can_finish(n: i32, times: &Vec<i32>, days: i32) -> bool {
    let mut total = 0;

    for &time in times {
        total += days / time;
    }

    total >= n
}