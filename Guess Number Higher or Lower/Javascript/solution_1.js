// https://leetcode.cn/problems/guess-number-higher-or-lower/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

const guess = function (num) {
  return -1;
};

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left + 1 < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (guess(mid) <= 0) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (guess(left) === 0) {
    return left;
  }

  if (guess(right) === 0) {
    return right;
  }

  return -1;
};
