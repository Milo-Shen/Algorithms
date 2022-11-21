// https://leetcode.cn/problems/check-if-the-sentence-is-pangram/

const checkIfPangram = function (sentence) {
  return new Set(sentence.split('')).size === 26;
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
