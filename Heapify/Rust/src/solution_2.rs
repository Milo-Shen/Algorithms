// https://www.lintcode.com/problem/130/

// 算法思路
// 初始选择最接近叶子的一个父结点，与其两个儿子中较小的一个比较，若大于儿子，则与儿子交换。
// 交换后再与新的儿子比较并交换，直至没有儿子。
// 再选择较浅深度的父亲结点，重复上述步骤。
// 时间复杂度分析
// 这个版本的算法，乍一看也是 `O(nlog(n))`， 但是我们仔细分析一下，算法从第 `n/2` 个数开始，倒过来进行 `sift down`。也就是说，相当于从 `heap` 的倒数第二层开始进行 `siftdown` 操作，倒数第二层的节点大约有 `n/4` 个， 这 `n/4` 个数，最多 `siftdown` 1次就到底了，所以这一层的时间复杂度耗费是 `O(n/4)`，然后倒数第三层差不多 `n/8` 个点，最多 `siftdown` 2次就到底了。所以这里的耗费是 `O(n/8 * 2)`, 倒数第4层是 `O(n/16 * 3)`，倒数第5层是 `O(n/32 * 4)` ... 因此累加所有的时间复杂度耗费为：
//
// `T(n) = O(n/4) + O(n/8 * 2) + O(n/16 * 3) ...`
//
// 然后我们用 `2T - T` 得到：
//
// ```
// 2 * T(n) = O(n/2) + O(n/4 * 2) + O(n/8 * 3) + O(n/16 * 4) ...
// T(n) = O(n/4) + O(n/8 * 2) + O(n/16 * 3) ...
//
// 2 * T(n) - T(n) = O(n/2) +O (n/4) + O(n/8) + ...
// = O(n/2 + n/4 + n/8 + ... )
// = O(n)
// ```
//
// 因此得到 `T(n) = 2 * T(n) - T(n) = O(n)`

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