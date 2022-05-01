// https://leetcode.cn/problems/course-schedule-ii/
// https://www.lintcode.com/problem/616/

pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
    let prerequisites_len = prerequisites.len();
    let num_courses_usize = num_courses as usize;
    if prerequisites_len == 0 {
        return num_courses != 0;
    }

    // 构建图, 代表先修课 -> 后修课
    let mut graph: Vec<Vec<i32>> = vec![vec![]; num_courses_usize];

    // 统计每个点的入度数, 并构建图
    let mut in_degree = vec![0; num_courses_usize];
    for i in 0..prerequisites_len {
        let prerequisite = &prerequisites[i];
        graph[prerequisite[1] as usize].push(prerequisite[0]);
        in_degree[prerequisite[0] as usize] = in_degree[prerequisite[0] as usize] + 1;
    }

    // 把所有入度为 0 的课程压入栈中
    let mut queue = vec![];
    for i in 0..num_courses_usize {
        if in_degree[i] == 0 {
            queue.push(i as i32);
        }
    }

    // 先修课的列表 与 已修课的数量
    let mut num_count = 0;

    // 开始对课程进行拓扑排序
    while queue.len() > 0 {
        let course = queue.remove(0);
        num_count = num_count + 1;

        // BFS 已经修过的课程下一层节点, 并把他们的入度数 - 1
        for i in 0..graph[course as usize].len() {
            let next_course = graph[course as usize][i];
            in_degree[next_course as usize] = in_degree[next_course as usize] - 1;

            // 如果发现新的入度为 0 的节点， 则压入栈中
            if in_degree[next_course as usize] == 0 {
                queue.push(next_course);
            }
        }
    }
    return num_count == num_courses;
}