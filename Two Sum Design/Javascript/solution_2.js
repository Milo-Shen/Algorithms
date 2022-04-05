class TwoSum {
  constructor() {
    this.hash = {};
  }

  add(num) {
    this.hash[num] = (this.hash[num] || 0) + 1;
  }

  find(target) {
    for (let cur_val in this.hash) {
      let remain = target - cur_val;
      let count = remain === cur_val ? 2 : 1;
      if (this.hash[remain] >= count) {
        return true;
      }
    }
    return false;
  }
}

let two_sum = new TwoSum();
two_sum.add(2);
two_sum.add(1);
two_sum.add(10);
two_sum.add(3);
two_sum.add(3);

let answer = two_sum.find(6);
console.log(`two sum = ${answer}`);
