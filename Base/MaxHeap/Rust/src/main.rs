use rust::MaxHeap;

fn main() {
    let mut max_heap = MaxHeap::new();
    max_heap.push(2);
    max_heap.push(1);
    max_heap.push(1);
    max_heap.push(3);
    println!("{:?}", max_heap.pop());
    println!("{:?}", max_heap.pop());
    println!("{:?}", max_heap.pop());
    println!("{:?}", max_heap.pop());
    println!("{:?}", max_heap.pop());
}
