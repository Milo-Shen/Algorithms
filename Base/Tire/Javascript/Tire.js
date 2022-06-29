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

// 定义一颗字典树
class Trie {
  /**
   * 构造函数: 构造 Trie 树
   */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * 获取 Trie 树的根节点
   * @returns {TrieNode}
   */
  getRoot() {
    return this.root;
  }

  /**
   * 往字典树里插入节点
   * 时间复杂度: O(L)
   * @param word
   */
  insert(word) {
    let node = this.root;
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
  }
}

module.exports = {
  TrieNode,
  Trie,
};
