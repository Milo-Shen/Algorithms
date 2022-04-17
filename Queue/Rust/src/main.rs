mod seq_queue;
mod circle_queue;
mod linked_queue;

use seq_queue::SeqQueue;

fn main() {
    // the example of seq queue
    let mut my_seq_queue: SeqQueue<i32> = SeqQueue::new();
    my_seq_queue.enqueue(1);
    my_seq_queue.enqueue(2);
    my_seq_queue.enqueue(3);
    println!("{:?}", my_seq_queue);
    my_seq_queue.print();
    let pop_value = my_seq_queue.dequeue().unwrap();
    println!("pop value = {}", pop_value);
    my_seq_queue.print();
}
