// https://leetcode.cn/problems/sequence-reconstruction/
// https://www.lintcode.com/problem/605

function sequenceReconstruction(nums, sequences) {
  // 构建图
  let graph = buildGraph(sequences);

  // 计算每个节点的入度数
  let inDegree = buildInDegree(graph);

  // 计算遍历的路径
  let topOrder = getTopOrder(inDegree, graph);

  // 判断当前拓扑排序是否是唯一的
  if (!topOrder || topOrder.length !== nums.length) {
    return false;
  }

  // 逐个比对
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== topOrder[i]) {
      return false;
    }
  }

  return true;
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
    inDegree.set(neighbors, 0);
  }

  for (let neighbors of graph.values()) {
    for (let neighbor of neighbors) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }

  return inDegree;
}

// 计算一个拓扑序列
function getTopOrder(inDegree, graph) {
  let queue = [];
  let topOrder = [];

  // 遍历过的节点数量
  let travelCount = 0;

  // 把入度数为 0 的节点放到
  for (let [node, degree] of inDegree) {
    if (degree !== 0) continue;
    queue.push(node);
  }

  // BFS 节点
  while (queue.length) {
    if (queue.length > 1) {
      return null;
    }

    let node = queue.shift();
    topOrder.push(node);
    travelCount++;

    // 它的邻居节点的入度数 - 1
    let neighbors = graph.get(node);
    for (let neighbor of neighbors) {
      let neighborDegree = inDegree.get(neighbor) - 1;
      inDegree.set(neighbor, neighborDegree);

      // 如果发现当前节点的入度数为 0, 则重新压入栈中
      if (neighborDegree === 0) {
        queue.push(neighbor);
      }
    }
  }

  return graph.size === topOrder.length ? topOrder : null;
}

// test data
let nums = [4, 1, 5, 2, 6, 3];
let sequences = [
  [5, 2, 6, 3],
  [4, 1, 5, 2],
];

console.log(sequenceReconstruction(nums, sequences));
