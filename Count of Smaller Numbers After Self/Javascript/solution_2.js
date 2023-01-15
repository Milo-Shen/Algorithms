// https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
// https://www.lintcode.com/problem/249/

//
const countSmaller = function (nums) {
  let nums_len = nums.length;
  if (!nums || !nums_len) {
    return [];
  }

  let block_array = new BlockArray(20000);
  let result = Array(nums_len).fill(0);

  for (let i = nums_len - 1; i >= 0; i--) {
    let num = nums[i] + 10000;
    result[i] = block_array.count_smaller(num);
    block_array.insert(num);
  }

  return result;
};

class Block {
  constructor() {
    this.total = 0;
    this.counter = new Map();
  }
}

class BlockArray {
  constructor(max_value) {
    let block_len = ~~(max_value / 100) + 1;
    this.blocks = [];
    for (let i = 0; i < block_len; i++) {
      this.blocks.push(new Block());
    }
  }

  count_smaller(value) {
    let count = 0;
    let block_index = ~~(value / 100);

    // 统计当前分区，之前的所有分区的总数
    for (let i = 0; i < block_index; i++) {
      count += this.blocks[i].total;
    }

    // 统计当前分区的总数
    let counter = this.blocks[block_index].counter;
    for (let [num, cnt] of counter) {
      if (num < value) {
        count += cnt;
      }
    }

    return count;
  }

  insert(value) {
    let block_index = ~~(value / 100);
    let block = this.blocks[block_index];
    block.total += 1;
    block.counter.set(value, (block.counter.get(value) || 0) + 1);
  }
}

console.log(countSmaller([5, 2, 6, 1]));
