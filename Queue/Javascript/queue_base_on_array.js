class MyQueue {
  constructor() {
    this.MAXSIZE = 100;
    this.head = 0;
    this.tail = 0;
    this.queue = [];
  }

  // 往队列里面插入数据
  enqueue(item) {
    if (this.tail === this.MAXSIZE) {
      return;
    }
    this.queue[this.tail++] = item;
  }

  // pop 一个数据出队列
  dequeue() {
    if (this.head === this.tail) {
      return -1;
    }
    return this.queue[this.head++];
  }

  print() {
    let temp = [];
    for (let i = this.head; i < this.tail; i++) {
      temp.push(this.queue[i]);
    }
    console.log('all queue values: ', temp);
  }
}

let my_queue = new MyQueue();
my_queue.enqueue(1);
my_queue.enqueue(2);
my_queue.enqueue(3);
console.log(my_queue);
console.log('dequeue', my_queue.dequeue());
my_queue.print();
