// https://leetcode-cn.com/problems/word-ladder/

//  beginWord 不需要在 wordList 中, 这个和 lint-code 上的不一样

function ladderLength(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return 0;
  }

  // 将 wordList 转换成 wordDict
  let word_dict = new Set(wordList);
  let next_word_cache = new Map();

  let count = 0;
  let queue = [beginWord];
  let set = new Set([beginWord]);

  while (queue.length) {
    // 记录了当前层的长度
    count++;

    // 当前层有 queue_len 个元素
    let queue_len = queue.length;
    for (let i = 0; i < queue_len; i++) {
      let word = queue.shift();

      // 如果当前层的值，正好是结尾词
      if (word === endWord) {
        return count;
      }

      // 获得下一层的单词
      let next_words_list = get_next_words(word_dict, word, next_word_cache);
      for (let j = 0, len = next_words_list.length; j < len; j++) {
        let next_word = next_words_list[j];
        if (set.has(next_word)) {
          continue;
        }

        queue.push(next_word);
        set.add(next_word);
      }
    }
  }

  // 不能实现首尾接龙则返回 0
  return 0;
}

function replace(str, index, char) {
  return str.substring(0, index) + char + str.substring(index + 1);
}

function get_next_words(word_dict, word, cache) {
  if (cache.has(word)) {
    return cache.get(word);
  }

  let result = [];
  for (let i = 0; i < 26; i++) {
    let c = String.fromCharCode(97 + i);
    for (let j = 0, len = word.length; j < len; j++) {
      if (c === word.charAt(j)) {
        continue;
      }
      let next_word = replace(word, j, c);
      if (word_dict.has(next_word)) {
        result.push(next_word);
      }
    }
  }

  cache.set(word, result);
  return result;
}

// test data
let beginWord = 'hit';
let endWord = 'cog';
let wordList_1 = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
let wordList_2 = ['hot', 'dot', 'dog', 'lot', 'log'];
console.log(ladderLength(beginWord, endWord, wordList_1));
console.log(ladderLength(beginWord, endWord, wordList_2));
