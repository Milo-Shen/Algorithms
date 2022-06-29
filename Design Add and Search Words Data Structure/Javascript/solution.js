// https://leetcode.cn/problems/design-add-and-search-words-data-structure/
// https://www.lintcode.com/problem/473/

const { Trie } = require('../../Base/Tire/Javascript/Tire');

const WordDictionary = function () {
  this.trie = new Trie();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.trie.insert(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return dfs(this.trie.getRoot(), word, 0);
};

const dfs = function (root, word, index) {
  if (index === word.length) {
    return root.is_word;
  }

  let letter = word[index];

  if (letter === '.') {
    for (let [_, child] of root.children) {
      if (dfs(child, word, index + 1)) {
        return true;
      }
    }

    return false;
  }

  if (root.children.has(letter)) {
    return dfs(root.children.get(letter), word, index + 1);
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * const obj = new WordDictionary()
 * obj.addWord(word)
 * const param_2 = obj.search(word)
 */
const obj = new WordDictionary();
obj.addWord('word');
console.log(obj.search('word'));
