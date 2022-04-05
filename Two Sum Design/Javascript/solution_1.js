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

  first_index_of(target) {
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

  last_index_of(target) {
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

  find(target) {
    let left = 0;
    let right = this.list.length - 1;
    while (left < right) {
      let sum = this.list[left] + this.list[right];

      if (target > sum) {
        left++;
      } else if (target < sum) {
        right--;
      } else if (target === sum) {
        return [left, right];
      }
    }

    return [-1, -1];
  }
}

let two_sum = new TwoSum();
two_sum.add(2);
two_sum.add(1);
two_sum.add(10);
two_sum.add(3);
two_sum.add(3);

let first_index_of = two_sum.first_index_of(3);
let last_index_of = two_sum.last_index_of(3);
console.log(`first_index_of = ${first_index_of}`, `last_index_of = ${last_index_of}`);
let two_sum_pos = two_sum.find(13);
console.log(`two_sum_pos = ${two_sum_pos}`);