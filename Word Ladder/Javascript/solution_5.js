// https://leetcode-cn.com/problems/word-ladder/

//  beginWord 不需要在 wordList 中, 这个和 lint-code 上的不一样

function ladderLength(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return 0;
  }

  if (beginWord === endWord) {
    return 1;
  }

  // 将 wordList 转换成 wordDict
  let word_dict = new Set(wordList);

  if (!word_dict.has(endWord)) {
    return 0;
  }

  let next_word_cache = new Map();

  // 最短路径
  let distance = 1;

  // 双向宽度优先搜索
  let forward_queue = [beginWord];
  let forward_set = new Set([beginWord]);
  let backward_queue = [endWord];
  let backward_set = new Set([endWord]);

  while (forward_queue.length && backward_queue) {
    distance += 1;
    if (extend_queue(forward_queue, forward_set, backward_set, word_dict, next_word_cache)) {
      return distance;
    }

    distance += 1;
    if (extend_queue(backward_queue, backward_set, forward_set, word_dict, next_word_cache)) {
      return distance;
    }
  }

  // 不能实现首尾接龙则返回 0
  return 0;
}

function extend_queue(queue, visited, opposite_visited, word_dict, cache) {
  let len = queue.length;

  for (let i = 0; i < len; i++) {
    let word = queue.shift();

    // 对下一层单词进行 BFS
    let next_words_list = get_next_words(word_dict, word, cache);
    for (let i = 0; i < next_words_list.length; i++) {
      let next_word = next_words_list[i];
      if (visited.has(next_word)) {
        continue;
      }

      if (opposite_visited.has(next_word)) {
        return true;
      }

      queue.push(next_word);
      visited.add(next_word);
    }
  }

  return false;
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
