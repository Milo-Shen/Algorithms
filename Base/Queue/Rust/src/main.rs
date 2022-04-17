mod seq_queue;
mod circle_queue;
mod linked_queue;

use seq_queue::SeqQueue;
use circle_queue::CircleQueue;

fn main() {
    // the example of seq queue
    println!("the example of seq queue");
    let mut my_seq_queue: SeqQueue<i32> = SeqQueue::new();
    my_seq_queue.enqueue(1);
    my_seq_queue.enqueue(2);
    my_seq_queue.enqueue(3);
    println!("{:?}", my_seq_queue);
    my_seq_queue.print();
    let pop_value = my_seq_queue.dequeue().unwrap();
    println!("pop value = {}", pop_value);
    my_seq_queue.print();

    // the example of circle queue
    println!("the example of circle queue");
    let mut my_circle_queue: CircleQueue<i32> = CircleQueue::new();
    my_circle_queue.enqueue(1);
    my_circle_queue.enqueue(2);
    my_circle_queue.enqueue(3);
    println!("{:?}", my_circle_queue);
    my_circle_queue.print();
    let pop_value = my_circle_queue.dequeue().unwrap();
    println!("pop value = {}", pop_value);
    my_circle_queue.print();
}
