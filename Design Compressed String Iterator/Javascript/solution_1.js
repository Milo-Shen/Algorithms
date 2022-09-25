// https://leetcode.cn/problems/design-compressed-string-iterator/

/**
 * @param {string} compressedString
 */
let StringIterator = function (compressedString) {
  this.array = [];

  let num = '';
  let char = null;

  for (let i = 0, len = compressedString.length; i < len; i++) {
    if (Number.isNaN(Number(compressedString[i]))) {
      if (char) {
        for (let j = 0; j < ~~num; j++) {
          this.array.push(char);
        }
      }

      char = compressedString[i];
      num = '';
    } else {
      num += compressedString[i];
    }
  }

  for (let i = 0; i < ~~num; i++) {
    this.array.push(char);
  }
};

/**
 * @returns {*}
 */
StringIterator.prototype.next = function () {
  if (!this.hasNext()) {
    return ' ';
  }

  return this.array.shift();
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {
  return !!this.array.length;
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
let obj = new StringIterator('L10e2t1C1o1d1e11');
console.log(obj);
let param_1 = obj.next();
let param_2 = obj.hasNext();
console.log(param_1, param_2);
