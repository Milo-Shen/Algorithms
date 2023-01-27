// https://leetcode.cn/problems/merge-nodes-in-between-zeros/

use rust::{ListNode};

pub fn merge_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut sum = 0;
    let mut arr: Vec<i32> = Vec::new();

    let mut node = &head;

    while node.is_some() {
        let node_val = node.as_ref().unwrap().val;
        if node_val == 0 && sum > 0 {
            arr.push(sum);
            sum = 0;
        } else {
            sum += node_val;
        }

        node = &node.as_ref().unwrap().next;
    }

    let mut answer = Some(Box::new(ListNode::new(0)));
    let mut ptr = &mut answer;

    for val in arr {
        let node = Some(Box::new(ListNode::new(val)));
        ptr.as_mut().unwrap().next = node;
        ptr = &mut ptr.as_mut().unwrap().next;
    }

    answer.unwrap().next
}