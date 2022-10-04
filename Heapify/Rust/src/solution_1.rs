pub fn heapify(arr: Vec<i32>) -> Vec<i32> {
    let a_len = arr.len();
    let mut arr = arr;

    for i in 0..a_len {
        siftup(&mut arr, i);
    }

    return arr;
}

fn siftup(arr: &mut Vec<i32>, mut k: usize) {
    while k != 0 {
        let father = (k - 1) / 2;
        if arr[k] > arr[father] {
            break;
        }

        let temp = arr[k];
        arr[k] = arr[father];
        arr[father] = temp;
        k = father;
    }
}