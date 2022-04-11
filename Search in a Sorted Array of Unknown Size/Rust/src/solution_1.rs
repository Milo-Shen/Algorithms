pub struct Reader {
    list: Vec<i32>,
}

impl Reader {
    pub fn new(list: Vec<i32>) -> Self {
        Self {
            list
        }
    }

    pub fn get(&self, k: i32) -> i32 {
        self.list[k as usize]
    }
}

pub fn search(reader: &Reader, target: i32) -> i32 {
    let mut index = 0;
    let value = reader.get(index);
    if value == target {
        return index;
    }

    index = 1;
    while reader.get(index) < target {
        index = index * 2;
    }

    binary_search(&reader, 0, index, target)
}

fn binary_search(reader: &Reader, mut start: i32, mut end: i32, target: i32) -> i32 {
    while start + 1 < end {
        let mid = start + (end - start) / 2;

        if reader.get(mid) < target {
            start = mid;
        } else if reader.get(mid) > target {
            end = mid
        } else {
            end = mid;
        }
    }

    if reader.get(start) == target {
        return start;
    }

    if reader.get(end) == target {
        return end;
    }

    -1
}