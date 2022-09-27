// https://www.lintcode.com/problem/134
// https://leetcode.cn/problems/lru-cache/
// https://leetcode.cn/problems/lru-cache-lcci/
// https://leetcode.cn/problems/OrIXps/

mod solution_1;

fn main() {
    let mut cache = solution_1::LRUCache::new(10);
    cache.put(1, 10086);
    let val = cache.get(1);
    println!("val = {}", val);
}
