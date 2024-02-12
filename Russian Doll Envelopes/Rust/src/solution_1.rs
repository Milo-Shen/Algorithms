use std::cmp::Ordering;

pub fn max_envelopes(envelopes: Vec<Vec<i32>>) -> i32 {
    let n = envelopes.len();

    if n == 0 {
        return 0;
    }

    let mut envelopes = envelopes;
    envelopes.sort_by(custom_compare);

    let mut lis = vec![i32::MAX; n + 1];
    lis[0] = i32::MIN;

    let mut longest = 0;
    for envelope in &envelopes {
        let index = first_gte(&lis, n + 1, envelope[1]);
        lis[index] = envelope[1];
        longest = longest.max(index);
    }

    longest as i32
}

fn custom_compare(a: &Vec<i32>, b: &Vec<i32>) -> Ordering {
    if a[0] < b[0] {
        return Ordering::Less;
    }

    if a[0] == b[0] {
        if a[1] == b[1] {
            return Ordering::Equal;
        }
        if a[1] < b[1] {
            return Ordering::Greater;
        }
        if a[1] > b[1] {
            return Ordering::Less;
        }
    }

    Ordering::Greater
}

fn first_gte(nums: &Vec<i32>, len: usize, target: i32) -> usize {
    let mut start = 0;
    let mut end = len - 1;

    while start + 1 < end {
        let mid = start + (end - start) / 2;
        if nums[mid] >= target {
            end = mid;
        } else {
            start = mid;
        }
    }

    if nums[start] >= target {
        return start;
    }

    return end;
}
