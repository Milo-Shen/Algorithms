// https://www.lintcode.com/problem/437/

pub fn copy_books(pages: Vec<i32>, k: i32) -> i32 {
    let page_len = pages.len();

    if page_len == 0 {
        return 0;
    }

    if k == 0 {
        return -1;
    }

    let mut start = *pages.iter().min().unwrap();
    let mut end = pages.iter().sum::<i32>();

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if get_number_of_copiers(&pages, mid) <= k {
            end = mid;
        } else {
            start = mid;
        }
    }

    if get_number_of_copiers(&pages, start) <= k {
        return start;
    }

    end
}

fn get_number_of_copiers(pages: &Vec<i32>, limit: i32) -> i32 {
    let mut copiers = 0;
    let mut last_copied = limit;

    for &page in pages {
        if page > limit {
            return i32::MAX;
        }

        if last_copied + page > limit {
            copiers += 1;
            last_copied = 0;
        }

        last_copied += page;
    }

    copiers
}