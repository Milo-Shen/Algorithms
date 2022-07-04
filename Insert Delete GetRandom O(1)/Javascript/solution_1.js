// https://leetcode.cn/problems/insert-delete-getrandom-o1/
// https://www.lintcode.com/problem/657

const RandomizedSet = function () {
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  }

  this.map.set(val, val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    this.map.delete(val);
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let len = this.map.size;
  let keys = [...this.map.keys()];
  let random = Math.floor(Math.random() * len);
  return this.map.get(keys[random]);
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
