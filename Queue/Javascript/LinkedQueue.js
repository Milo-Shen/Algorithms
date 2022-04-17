class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  print() {
    console.log(`value: ${this.value}, next: ${this.next}`);
  }

  destroy() {
    this.value = null;
    this.next = null;
  }
}

class LinkedQueue {
  constructor(props) {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    if (this.head === null) {
      this.tail = new Node(item);
      this.head = this.tail;
    } else {
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head !== null) {
      let item = this.head.value;
      let pre_node = this.head;
      this.head = this.head.next;
      pre_node.destroy();
      return item;
    } else {
      return -1;
    }
  }

  print() {
    let temp = [];
    if (this.head === null) {
      console.log('empty status');
      return;
    }
    let visit = this.head;
    while (visit !== null) {
      temp.push(visit.value);
      visit = visit.next;
    }
    console.log(temp);
  }
}

let linked_queue = new LinkedQueue();
linked_queue.enqueue(1);
linked_queue.enqueue(2);
linked_queue.enqueue(3);
linked_queue.enqueue(4);
linked_queue.print();
console.log('dequeue value: ', linked_queue.dequeue());
linked_queue.print();
