// https://leetcode-cn.com/problems/word-ladder/
// https://www.lintcode.com/problem/120/

function ladderLength(beginWord, endWord, wordList) {
  // 对异常进行处理
  if (!wordList || !wordList.length) {
    return 0;
  }

  // 将 end word 加入 word list 中, 假如不存在的话
  if (wordList.indexOf(endWord) === -1) {
    wordList.push(endWord);
  }

  let count = 1;
  let queue = [beginWord];
  let set = new Set([beginWord]);

  while (queue.length) {
    // 到下一层, 不是当前层的长度
    count++;

    // 当前层有 queue_len 个元素
    let queue_len = queue.length;
    for (let i = 0; i < queue_len; i++) {
      let word = queue.shift();

      // 获得下一层的单词
      let next_words_list = get_next_words(wordList, word);
      for (let j = 0, len = next_words_list.length; j < len; j++) {
        let next_word = next_words_list[j];
        if (set.has(next_word)) {
          continue;
        }

        // 如果下一层的词是尾词, 直接返回当前到下一层的长度
        if (next_word === endWord) {
          return count;
        }

        queue.push(next_word);
        set.add(next_word);
      }
    }
  }

  return count;
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
let wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(ladderLength(beginWord, endWord, wordList));
