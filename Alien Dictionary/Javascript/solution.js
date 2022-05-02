// https://www.lintcode.com/problem/892/
// https://leetcode.cn/problems/Jf1JuT/

function alienOrder(words) {
  // 生成 graph
  let graph = buildGraph(words);

  // 计算入度
  let inDegree = getInDegree(graph);

  // 获得拓扑排序
  let order = getTopologicalSorting(inDegree, graph);
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

function getInDegree(graph) {
  // 存储每个节点的入度数
  let inDegree = new Map();

  // 初始化每个节点的入度数
  for (let neighbors of graph.keys()) {
    inDegree.set(neighbors, 0);
  }

  for (let neighbors of graph.values()) {
    for (let neighbor of neighbors) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }

  return inDegree;
}

function getTopologicalSorting(inDegree, graph) {
  let queue = [];

  // 遍历过的节点数量 与 遍历过的路径
  let travelCount = 0;
  let travelPath = [];

  // 把所有入度为 0 的压入栈中
  for (let [node, degree] of inDegree) {
    if (degree !== 0) continue;
    queue.push(node);
  }

  // BFS 图
  while (queue.length) {}
}

function getMinimum(array) {
  let min = 0;
  for (let i = 1, len = array.length; i < len; i++) {
    if (array[i] >= array[min]) continue;
    min = i;
  }
}

let words = ['wrt', 'wrf', 'er', 'ett', 'rftt'];
// console.log(alienOrder(words));
console.log(getMinimum(['a', 'b']));
