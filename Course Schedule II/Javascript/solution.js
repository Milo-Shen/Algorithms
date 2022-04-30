// https://leetcode.cn/problems/course-schedule-ii/
// https://www.lintcode.com/problem/616/

function findOrder(numCourses, prerequisites) {
  // 先对异常情况进行检查
  if (!prerequisites || !prerequisites.length) {
    return Array(numCourses)
      .fill(0)
      .map((_, index) => index);
  }

  // 构建图, 代表先修课 -> 后修课
  let graph = [];
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  // 统计每个点的入度数, 并构建图
  let inDegree = Array(numCourses).fill(0);
  for (let i = 0, len = prerequisites.length; i < len; i++) {
    let prerequisite = prerequisites[i];
    graph[prerequisite[1]].push(prerequisite[0]);
    inDegree[prerequisite[0]]++;
  }

  // 把所有入度为 0 的课程压入栈中
  let queue = [];
  for (let i = 0, len = inDegree.length; i < len; i++) {
    if (inDegree[i] !== 0) continue;
    queue.push(i);
  }

  // 先修课列表
  let topCourse = [];

  // 开始对课程进行拓扑排序
  while (queue.length) {
    let course = queue.shift();
    topCourse.push(course);

    // BFS 已经修过的课程下一层节点, 并把他们的入度数 - 1
    for (let i = 0, len = graph[course].length; i < len; i++) {
      let next_course = graph[course][i];
      inDegree[next_course]--;

      // 如果发现新的入度为 0 的节点， 则压入栈中
      if (inDegree[next_course] === 0) {
        queue.push(next_course);
      }
    }
  }

  return topCourse.length === numCourses ? topCourse : [];
}

// test cases
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
console.log(findOrder(2, [[0, 1]]));
