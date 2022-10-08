// https://leetcode.cn/problems/ugly-number-ii/

pub fn nth_ugly_number(n: i32) -> i32 {
    let mut heap = MinHeap::new();
    let mut set = HashSet::new();
    let factors = [2, 3, 5];

    heap.push(Reverse(1));
    set.insert(1);

    let mut cur_ugly = 1;
    let mut new_ugly: i64;

    for _ in 0..n {
        cur_ugly = heap.pop().unwrap().0;

        for factor in factors {
            new_ugly = cur_ugly * factor;
            if !set.contains(&new_ugly) {
                set.insert(new_ugly);
                heap.push(Reverse(new_ugly));
            }
        }
    }

    cur_ugly as i32
}
