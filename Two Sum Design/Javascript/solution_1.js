class TwoSum {
  constructor() {
    this.list = [];
  }

  add(num) {
    this.list.push(num);
    let index = this.list.length - 1;
    while (index > 0 && this.list[index - 1] > this.list[index]) {
      this.swap(index);
    }
  }

  swap(index) {
    let temp = this.list[index - 1];
    this.list[index - 1] = this.list[index];
    this.list[index] = temp;
  }

  find_first(target) {
    let start = 0;
    let end = this.list.length - 1;
    while (start + 1 < end) {
      let mid = start + Math.floor((end - start) / 2);
      if (this.list[mid] < target) {
        start = mid;
      } else if (this.list[mid] > target) {
        end = mid;
      } else {
        end = mid;
      }
    }

    if (this.list[start] === target) {
      return start;
    }

    if (this.list[end] === target) {
      return end;
    }

    return -1;
  }

  find_last(target) {
    let start = 0;
    let end = this.list.length - 1;
    while (start + 1 < end) {
      let mid = start + Math.floor((end - start) / 2);
      if (this.list[mid] < target) {
        start = mid;
      } else if (this.list[mid] > target) {
        end = mid;
      } else {
        start = mid;
      }
    }

    if (this.list[end] === target) {
      return end;
    }

    if (this.list[start] === target) {
      return start;
    }

    return -1;
  }
}

let two_sum = new TwoSum();
two_sum.add(2);
two_sum.add(1);
two_sum.add(10);
two_sum.add(3);
two_sum.add(3);

let index_first = two_sum.find_first(3);
let index_last = two_sum.find_last(3);
console.log(index_first, index_last);
