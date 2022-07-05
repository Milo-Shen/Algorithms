// https://leetcode.cn/problems/insert-delete-getrandom-o1/
// https://www.lintcode.com/problem/657

const RandomizedSet = function () {
  // 存放数字
  this.nums = [];
  // num => index, 存放数字在 nums 中所对应的下标
  this.nums_to_index_map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // 如果该数字已经存在, 返回 false
  if (this.nums_to_index_map.has(val)) {
    return false;
  }

  // 如果该数字不存在, 加入该数字, 返回 true
  this.nums_to_index_map.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // 如果这个数字不存在, 无需删除, 直接返回 false
  if (!this.nums_to_index_map.has(val)) {
    return false;
  }

  // 从 map 中得到 delete num 在 list 中所对应的 index
  let delete_index = this.nums_to_index_map.get(val);

  // 如果 val 不是 nums 中的最后一个元素, 那么把最后一个元素放到 val 的位置
  let nums_len = this.nums.length;
  if (delete_index < nums_len - 1) {
    // 用最后一个元素覆盖被删除的元素
    let last_num = this.nums[nums_len - 1];
    // 把最后一个元素的指针指向新的 index
    this.nums_to_index_map.set(last_num, delete_index);
  }

  // 删除指向被删除元素的指针
  this.nums_to_index_map.delete(val);
  this.nums.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let len = this.nums.length;
  let random = Math.floor(Math.random() * len);
  return this.nums[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
let randomized_set = new RandomizedSet();
randomized_set.insert(1);
randomized_set.remove(2);
randomized_set.insert(2);
console.log(randomized_set.getRandom());
