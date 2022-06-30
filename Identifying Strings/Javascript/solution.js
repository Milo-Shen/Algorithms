// https://www.lintcode.com/problem/333/

const { Trie } = require('../../Base/Tire/Javascript/Tire');

function shortPrefix(stringArray) {
  let trie = new Trie();
  let result = [];

  for (let i = 0, len = stringArray.length; i < len; i++) {
    trie.insert(stringArray[i]);
  }

  for (let i = 0, len = stringArray.length; i < len; i++) {
    result[i] = getUniquePrefix(trie.getRoot(), stringArray[i]);
  }

  return result;
}

function getUniquePrefix(root, word) {
  let node = root;

  for (let i = 0, len = word.length; i < len; i++) {
    let letter = word[i];
    if (node.prefix_count === 1) {
      return word.slice(0, i);
    }
    node = node.children.get(letter);
  }

  return word;
}

// test cases
console.log(shortPrefix(['aaa', 'bbc', 'bcd']));
