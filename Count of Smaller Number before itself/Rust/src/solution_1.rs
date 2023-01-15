pub fn count_of_smaller_number_i_i(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    let mut result = Vec::with_capacity(len);

    if len == 0 {
        return result;
    }

    let mut block_array = BlockArray::new(10000);

    for i in 0..len {
        let num = nums[i];
        result.push(block_array.count_smaller(num));
        block_array.insert(num);
    }

    result
}

struct Block {
    total: i32,
    counter: Vec<i32>,
}

impl Block {
    fn new(block_size: usize) -> Self {
        Self {
            total: 0,
            counter: vec![0; block_size],
        }
    }
}

struct BlockArray {
    block: Vec<Block>,
    block_size: usize,
}

impl BlockArray {
    fn new(capacity: usize) -> Self {
        let block_size = (capacity as f32).sqrt() as usize;
        let block_count = capacity / block_size + 1;
        let mut block = Vec::with_capacity(block_count);

        for _ in 0..block_count {
            block.push(Block::new(block_size));
        }

        Self {
            block,
            block_size,
        }
    }

    fn count_smaller(&mut self, val: i32) -> i32 {
        let block_index = val as usize / self.block_size;
        let mut total = 0;

        // 计算当前 block 之前, 所有 block 的 total 总数
        for i in 0..block_index {
            total += self.block[i as usize].total;
        }

        // 计算当前 block, 所有的 total 总数
        let mut i = 0;
        loop {
            if i + block_index * self.block_size >= val as usize {
                break;
            }

            total += self.block[block_index].counter[i];
            i += 1;
        }

        total
    }

    fn insert(&mut self, val: i32) {
        let block_index = val as usize / self.block_size;
        self.block[block_index].total += 1;
        self.block[block_index].counter[val as usize - block_index * self.block_size] += 1;
    }
}