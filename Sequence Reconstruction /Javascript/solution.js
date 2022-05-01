// https://leetcode.cn/problems/sequence-reconstruction/
// https://www.lintcode.com/problem/605

function sequenceReconstruction(nums, sequences) {
  // 构建图
  let graph = buildGraph(sequences);
  let inDegree = buildInDegree(graph);
}

// 构建图
function buildGraph(sequences) {
  // graph 的格式为 <i32, HashSet<i32>>
  let graph = new Map();

  // 生成图的各个 node
  for (let i = 0, len_i = sequences.length; i < len_i; i++) {
    let sequence = sequences[i];
    for (let j = 0, len_j = sequence.length; j < len_j; j++) {
      let node = sequence[j];
      if (!graph.has(node)) {
        graph.set(node, new Set());
      }
    }
  }

  // 为图的每个节点生成 neighbors
  for (let i = 0, len_i = sequences.length; i < len_i; i++) {
    let sequence = sequences[i];
    for (let j = 1, len_j = sequence.length; j < len_j; j++) {
      graph.get(sequence[j - 1]).add(sequence[j]);
    }
  }

  return graph;
}

// 计算入度
function buildInDegree(graph) {
  // 存储每个节点的入度数
  let inDegree = new Map();

  // 初始化每个节点的入度数
  for (let neighbors of graph.keys()) {
    console.log(neighbors);
  }

  for (let neighbors of graph.values()) {
    for (let neighbor of neighbors) {
      // console.log(neighbor);
    }
  }
}

// test data
let nums = [1, 2, 3];
let sequences = [
  [1, 2],
  [1, 3],
];

console.log(sequenceReconstruction(nums, sequences));
