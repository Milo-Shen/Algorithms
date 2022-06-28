// 字典树的节点的定义
class TrieNode {
  constructor() {
    // 儿子节点
    this.children = new Map();
    // 根节点到该节点是否是一个单词
    this.is_word = false;
    // 根节点到该节点的单词是什么
  }
}

// 定义一颗字典树
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  getRoot() {
    return this.root;
  }
}
