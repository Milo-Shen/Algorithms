class CircleQueue {
  constructor() {
    this.SIZE = 100;
    this.head = 0;
    this.tail = 0;
    this.queue = [];
  }

  enqueue(item) {
    // 队列已满
    if ((this.tail + 1) % this.SIZE === this.head) {
      return false;
    }

    this.queue[this.tail++] = item;
    this.tail = this.tail % this.SIZE;
    return true;
  }

  dequeue() {
    if (this.head === this.tail) {
      return null;
    }

    let item = this.queue[this.head++];
    this.head = this.head % this.SIZE;
    return item;
  }

  print() {
    let temp = [];
    for (let i = this.head; i < this.tail; i++) {
      temp.push(this.queue[i]);
    }
    console.log(temp);
  }
}

let circle_queue = new CircleQueue();
circle_queue.enqueue(1);
circle_queue.enqueue(2);
circle_queue.enqueue(3);
circle_queue.print();
console.log('dequeue', circle_queue.dequeue());
circle_queue.print();
