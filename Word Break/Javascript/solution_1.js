// https://leetcode.cn/problems/word-break/
// https://www.lintcode.com/problem/107/

const wordBreak = function (s, wordDict) {
  // 特殊情况处理
  // 如果字符串为 null 或空, 则返回 true
  if (!s || !s.length) {
    return true;
  }

  // 如果 dict 为 null 或空, 返回 false
  if (!wordDict || !wordDict.length) {
    return false;
  }

  // 获取最大的单词长度
  let max_word_len = get_max_word_len(wordDict);

  // 记忆化搜索
  let memo = new Map();

  // DFS 对单词进行划分
  return dfs(s, 0, max_word_len, wordDict, memo);
};

// 递归三要素之一: 递归的定义
// 从 index 开始的后缀字符串 s[index..] 能否划分成 dict 里的单词组合
function dfs(s, index, max_word_len, word_dict, memo) {
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
    if (!word_dict.includes(word)) {
      continue;
    }

    // 递归继续探求 s[end..] 是否可以划分成为 dict 里单词的组合
    // 如果可以, 则返回 true
    if (dfs(s, end, max_word_len, word_dict, memo)) {
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
  let max = -Infinity;
  for (let word of wordDict) {
    max = max < word.length ? word.length : max;
  }
  return max;
}

console.log(wordBreak('leetcode', ['leet', 'code']));
