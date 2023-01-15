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
  constructor(block_size) {
    this.total = 0;
    this.counter = Array(block_size).fill(0);
  }
}

class BlockArray {
  constructor(capacity) {
    this.blocks = [];
    this.block_size = ~~Math.sqrt(capacity);
    let block_len = ~~(capacity / this.block_size) + 1;
    for (let i = 0; i < block_len; i++) {
      this.blocks.push(new Block(this.block_size));
    }
  }

  count_smaller(value) {
    let count = 0;
    let block_index = ~~(value / this.block_size);

    // 统计当前分区，之前的所有分区的总数
    for (let i = 0; i < block_index; i++) {
      count += this.blocks[i].total;
    }

    // 统计当前分区的总数
    for (let i = 0; i + block_index * this.block_size < value; i++) {
      count += this.blocks[block_index].counter[i];
    }

    return count;
  }

  insert(value) {
    let block_index = ~~(value / this.block_size);
    this.blocks[block_index].total++;
    this.blocks[block_index].counter[value - block_index * this.block_size]++;
  }
}

console.log(countOfSmallerNumberII([32, 67]));
