// https://www.lintcode.com/problem/442/
// https://leetcode.cn/problems/implement-trie-prefix-tree/

// 字典树的节点的定义
class TrieNode {
  /**
   * 构造函数: 构造 Trie Node 字典树的节点
   */
  constructor() {
    // 儿子节点
    this.children = new Map();
    // 根节点到该节点是否是一个单词
    this.is_word = false;
    // 根节点到该节点的单词是什么
    this.word = null;
    // 记录前缀的数量
    this.prefix_count = 0;
  }
}

const Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  // 循环插入单词
  for (let i = 0, len = word.length; i < len; i++) {
    // 插入单词到字典树
    let letter = word[i];
    if (!node.children.has(letter)) {
      node.children.set(letter, new TrieNode());
    }

    // 移动到下一个 TireNode, 并且前缀数量 + 1
    node = node.children.get(letter);
    node.prefix_count++;
  }

  // 单词结尾，记录单词信息
  node.is_word = true;
  node.word = word;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  // 便利 prefix 中的字符
  for (let i = 0, len = word.length; i < len; i++) {
    let letter = word[i];
    if (!node.children.has(letter)) {
      return false;
    }
    node = node.children.get(letter);
  }

  // 循环结束后，只能说明 word 是一个前缀
  // 故而通过 is_word 变量判断 word 是不是一个单词
  return node.is_word;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  // 便利 prefix 中的字符
  for (let i = 0, len = prefix.length; i < len; i++) {
    let letter = prefix[i];
    if (!node.children.has(letter)) {
      return false;
    }
    node = node.children.get(letter);
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
