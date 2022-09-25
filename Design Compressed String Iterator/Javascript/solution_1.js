// https://leetcode.cn/problems/design-compressed-string-iterator/

/**
 * @param {string} compressedString
 */
let StringIterator = function (compressedString) {};

/**
 * @return {character}
 */
StringIterator.prototype.next = function () {};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function () {};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
let obj = new StringIterator('L1e2t1C1o1d1e1');
let param_1 = obj.next();
let param_2 = obj.hasNext();
console.log(param_1, param_2);
