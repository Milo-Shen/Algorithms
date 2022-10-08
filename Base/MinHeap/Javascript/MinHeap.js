class MinHeap {
  constructor() {
    this.array = [];
  }

  siftup(k) {
    while (k !== 0) {
      let father = ~~((k - 1) / 2);
      if (this.array[k] > this.array[father]) {
        break;
      }
      let temp = this.array[k];
      this.array[k] = this.array[father];
      this.array[father] = temp;
      k = father;
    }
  }

  siftdown(k) {
    let len = this.array.length;
    while (k * 2 + 1 < len) {
      // this.array[i] 的左儿子下标
      let left_son = k * 2 + 1;
      // this.array[i] 的右儿子下标
      let right_son = k * 2 + 2;
      // 将要和 this.array[i] 发生交换的叶子节点
      let son = left_son;

      if (right_son < len && this.array[left_son] > this.array[right_son]) {
        son = right_son;
      }

      if (this.array[son] > this.array[k]) {
        break;
      }

      let temp = this.array[son];
      this.array[son] = this.array[k];
      this.array[k] = temp;
      k = son;
    }
  }

  push(value) {
    const index = this.array.length;
    this.array.push(value);
    this.siftup(index);
  }

  peek() {
    return this.array.length === 0 ? null : this.array[0];
  }

  pop() {
    if (this.array.length === 0) {
      return null;
    }

    const first = this.array[0];
    const last = this.array.pop();
    if (first !== last) {
      this.array[0] = last;
      this.siftdown(0);
    }

    return first;
  }
}

module.exports = { MinHeap };