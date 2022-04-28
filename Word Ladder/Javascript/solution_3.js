// https://www.lintcode.com/problem/120/

function ladderLength(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return 0;
  }

  let queue = [beginWord];
  let map = new Map();
  map.set(beginWord, 0);

  while (queue.length) {
    // 当前层有 queue_len 个元素
    let queue_len = queue.length;
    for (let i = 0; i < queue_len; i++) {
      let word = queue.shift();

      // 如果当前层的值，正好是结尾词
      if (word === endWord) {
        // 因为最终要统计所有节点的数量，所以要把首节点也加进来，所以 + 1
        return map.get(word) + 1;
      }

      // 获得下一层的单词
      let next_words_list = get_next_words(wordList, word);
      for (let j = 0, len = next_words_list.length; j < len; j++) {
        let next_word = next_words_list[j];
        if (map.has(next_word)) {
          continue;
        }

        queue.push(next_word);
        map.set(next_word, map.get(word) + 1);
      }
    }
  }

  // 不能实现首尾接龙则返回 0
  return 0;
}

function get_next_words(wordList, word) {
  let result = [];
  for (let i = 0, len = wordList.length; i < len; i++) {
    let cur_word = wordList[i];
    if (cur_word.length !== word.length) {
      continue;
    }
    let different = 0;
    for (let j = 0, j_len = word.length; j < j_len; j++) {
      if (word.charAt(j) !== cur_word.charAt(j)) {
        different++;
        if (different > 1) {
          break;
        }
      }
    }
    if (different === 1) {
      result.push(cur_word);
    }
  }
  return result;
}

// test data
let beginWord = 'hit';
let endWord = 'cog';
let wordList_1 = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
let wordList_2 = ['hot', 'dot', 'dog', 'lot', 'log'];
let wordList_3 = ['a', 'b', 'c'];
console.log(ladderLength(beginWord, endWord, wordList_1));
console.log(ladderLength(beginWord, endWord, wordList_2));
console.log(ladderLength('a', 'c', wordList_3));
