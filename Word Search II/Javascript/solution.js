// https://www.lintcode.com/problem/132
// https://leetcode.cn/problems/word-search-ii/

// todo: to finish findWords
function findWords(board, words) {
  // 先找到所有单词的前缀
  let prefixes = find_prefixes(words);

  return false;
}

function find_prefixes(words) {
  let prefixes = new Set();
  for (let i = 0, len = words.length; i < len; i++) {}

  return prefixes;
}

// test cases
let board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
let words = ['oath', 'pea', 'eat', 'rain'];
console.log(findWords(board, words));
