class TwoSum {
  constructor() {
    this.hash = [];
  }

  add(num) {
    this.list.push(num);
    let index = this.list.length - 1;
    while (index > 0 && this.list[index - 1] > this.list[index]) {
      this.swap(index);
    }
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