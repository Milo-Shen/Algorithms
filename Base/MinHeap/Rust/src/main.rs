use rust::MinHeap;

fn main() {
    let mut min_heap = MinHeap::new();
    min_heap.push(2);
    min_heap.push(1);
    min_heap.push(1);
    min_heap.push(3);
    println!("{:?}", min_heap.pop());
    println!("{:?}", min_heap.pop());
    println!("{:?}", min_heap.pop());
    println!("{:?}", min_heap.pop());
    println!("{:?}", min_heap.pop());
}
