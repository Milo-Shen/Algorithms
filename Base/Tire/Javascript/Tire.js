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

  /**
   * 判断单词 word 是不是在字典树中
   * @param word
   * @returns {boolean}
   */
  has_word(word) {
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
  }

  /**
   * function: 判断前缀 prefix 是不是在字典树中
   * @param prefix
   * @returns {boolean}
   */
  has_prefix(prefix) {
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
  }
}

module.exports = {
  TrieNode,
  Trie,
};
