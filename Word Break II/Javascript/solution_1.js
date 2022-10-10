// https://leetcode.cn/problems/word-break-ii/
// https://www.lintcode.com/problem/582/

const wordBreak = function (s, wordDict) {
  // 特殊情况处理
  // 如果字符串为 null 或空, 则返回 true
  if (!s || !wordDict) {
    return [];
  }

  // 寻找最长的单词长度
  let { max_word_len, word_dict } = get_max_word_len(wordDict);

  // 通过 DFS 对单词进行划分
  let results = [];
  dfs(s, 0, max_word_len, word_dict, new Map(), [], results);

  return results;
};

// 递归三要素之一: 递归的定义
// 从 index 开始的后缀字符串 s[index..] 可以划分成 dict 里的单词组合的方案数
function dfs(s, index, max_word_len, word_dict, memo, path, results) {
  // 递归要素之三: 递归的出口
  // 已经划到 s 的末尾 ( 之前划分的词全部在 dict 里 ), 记录划分的句子并返回
  if (index === s.length) {
    results.push(path.join(' '));
    return;
  }

  // 剪枝 ( Pruning ): 如果 s[index..] 不可能划分成 dict 里的单词组合, 无需搜索, 直接返回
  if (!is_possible(s, index, max_word_len, word_dict, memo)) {
    return;
  }

  // 递归要素之二: 递归的拆解
  // 枚举下一个划分的字符串终点 ( exclusive ), 分治解决每个子问题
  for (let end = index + 1; end <= s.length; end++) {
    // 剪枝: 如果 ( end - start ) 大于最大单词长度, 则前缀词不可能出现在字典里, 直接退出
    if (end - index > max_word_len) {
      break;
    }

    // 得到 s 的前缀
    let word = s.substring(index, end);

    // 如果这个词没有出现在 dict 中, 本次划分不可行, 尝试其他划分
    if (!word_dict.has(word)) {
      continue;
    }

    // 把 word 加入当前路径
    path.push(word);
    // 递归继续探求 s[end..] 可以划分成为 dict 里单词的组合的方案数
    dfs(s, end, max_word_len, word_dict, memo, path, results);
    // 回溯 ( backtracking ): 清理之前的数据
    // 把 word 从当前路径中删除
    path.pop();
  }
}

function is_possible(s, index, max_word_len, word_dict, memo) {
  // 如果 s[index..] 已经被处理过, 则直接返回结果
  if (memo.has(index)) {
    return memo.get(index);
  }

  // 递归要素之三: 递归的出口
  // 已经划到 s 的末尾 ( 之前划分的词全部在 dict 里 ), 返回 true
  if (index === s.length) {
    return true;
  }

  // 递归要素之二: 递归的拆解
  // 枚举下一个划分的字符串终点 ( exclusive ), 分治解决每个子问题
  // 字符串终点是 exclusive, 所以应该从 index + 1 开始, 保证长度至少为 1
  for (let end = index + 1; end <= s.length; end++) {
    // 剪枝: 如果 ( end - start ) 大于最大单词长度, 则前缀词不可能出现在字典里, 直接退出
    if (end - index > max_word_len) {
      break;
    }

    // 得到 s 的前缀
    let word = s.substring(index, end);

    // 如果这个词没有出现在 dict 中, 本次划分不可行, 尝试其他划分
    if (!word_dict.has(word)) {
      continue;
    }

    // 递归继续探求 s[end..] 是否可以划分成为 dict 里单词的组合
    if (is_possible(s, end, max_word_len, word_dict, memo)) {
      memo.set(index, true);
      return true;
    }
  }

  // 记录 s[index..] 的结果, 以备后用
  memo.set(index, false);

  // 无法实现划分, 返回 false
  return false;
}

// 获取最长的单词长度
function get_max_word_len(wordDict) {
  let max_word_len = -Infinity;
  let word_dict = new Set();
  for (let word of wordDict) {
    word_dict.add(word);
    max_word_len = max_word_len < word.length ? word.length : max_word_len;
  }
  return { max_word_len, word_dict };
}

// test cases
console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
