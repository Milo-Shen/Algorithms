// https://www.lintcode.com/problem/249/description

function countOfSmallerNumberII(a) {
  if (!a || !a.length) {
    return [];
  }

  let block_array = new BlockArray(10000);
  let result = [];

  for (let num of a) {
    let count = block_array.count_smaller(num);
    result.push(count);
    block_array.insert(num);
  }

  return result;
}

class Block {
  constructor(props) {
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

console.log(countOfSmallerNumberII([32, 67]));
