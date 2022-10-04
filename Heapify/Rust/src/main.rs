// https://www.lintcode.com/problem/130/

// 算法思路
// 对于每个元素 `A[i]`，比较 `A[i]` 和它的父亲结点的大小，如果小于父亲结点，则与父亲结点交换。
// 交换后再和新的父亲比较，重复上述操作，直至该点的值大于父亲。
//
// 时间复杂度分析：
// 对于每个元素都要遍历一遍，这部分是 O(n)
// 每处理一个元素时，最多需要向根部方向交换 log(n) 次。
// 因此总的时间复杂度是 O(nlog(n))
//
// 除了上面的代码，我们也可以使用更有效率的 O(n) 的算法

mod solution_1;

fn main() {
    let mut arr = vec![3, 2, 1, 4, 5];
    let answer = solution_1::heapify(arr);
    println!("{:?}", answer);
}
