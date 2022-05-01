// https://www.lintcode.com/problem/892/
// https://leetcode.cn/problems/Jf1JuT/

function alienOrder(words) {
  // 生成 graph
  let graph = buildGraph(words);
  console.log(graph);
}

function buildGraph(words) {
  let graph = new Map();

  // 构建 Graph 的所有结点 node
  for (let i = 0, len_i = words.length; i < len_i; i++) {
    for (let j = 0, len_j = words[i].length; j < len_j; j++) {
      let node = words[i].charAt(j);
      if (graph.has(node)) continue;
      graph.set(node, new Set());
    }
  }

  // 构建 Graph 的所有边 ( neighbors )
  for (let i = 0, len_i = words.length - 1; i < len_i; i++) {
    let index = 0;
    while (index < words[i].length && index < words[i + 1].length) {
      if (words[i].charAt(index) !== words[i + 1].charAt(index)) {
        graph.get(words[i].charAt(index)).add(words[i + 1].charAt(index));
        break;
      }
      index++;
    }

    // 如果输入为 ["abc","ab"], "abc" 出现在 "ab" 前面不合法, graph 为 null
    if (index === Math.min(words[i].length, words[i + 1].length)) {
      if (words[i].length > words[i + 1].length) {
        return null;
      }
    }
  }

  return graph;
}

let words = ['wrt', 'wrf', 'er', 'ett', 'rftt'];
console.log(alienOrder(words));
