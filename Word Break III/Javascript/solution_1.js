// https://www.lintcode.com/problem/683

function wordBreak3(s, dict) {
  // 异常处理, 如果 s 字符串为 None 或空, 返回 0
  // 如果 dict 为 None 或空, 返回 0
  if (!s || !dict) {
    return 0;
  }

  // 获得最大单词长度, 把所有单词转成小写
  let { max_word_len, word_dict } = initialize(dict);

  // 记忆化搜索 memo
  let memo = new Map();

  // 通过 DFS 对单词进行划分
  return memo_search(s.toLowerCase(), 0, max_word_len, word_dict, memo);
}

function initialize(dict) {
  let max_word_len = -Infinity;
  let word_dict = new Set();

  for (let word of dict) {
    max_word_len = max_word_len < word.length ? word.length : max_word_len;
    word_dict.add(word.toLowerCase());
  }

  return { max_word_len, word_dict };
}

// 递归三要素之一: 递归的定义
// 从 index 开始的后缀字符串 s[index..] 可以划分成 dict 里的单词组合的方案数
function memo_search(s, index, max_word_len, word_dict, memo) {
  // 递归要素之三: 递归的出口
  // 已经划到 s 的末尾 ( 之前划分的词全部在 dict 里 ), 返回 1
  // 注意: 这里不返回 0, 比如: "Cat", ["Cat"] 可以划分为 "Cat" + ""
  // 只有 "" 返回 1, 最终 "Cat" 才能返回 1
  if (index === s.length) {
    return 1;
  }

  // 记忆化搜索: 如果 s[index..] 已经被处理过, 则直接返回结果
  if (memo.has(index)) {
    return memo.get(index);
  }

  // s[index..] 的方案总数
  let solutions = 0;

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

    // 递归继续探求 s[end..] 可以划分成为 dict 里单词的组合的方案数
    solutions += memo_search(s, end, max_word_len, word_dict, memo);
  }

  // 记录 s[index..] 的方案总数, 以备后用
  memo.set(index, solutions);

  // 返回 s[index..] 的方案总数, 给上一级调用
  return solutions;
}

// test cases
console.log(wordBreak3('helloworld', ['he', 'llo', 'hello', 'world']));
