#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

pub fn build_list(arr: Vec<i32>) -> Option<Box<ListNode>> {
    // 错误边界检查
    let arr_len = arr.len();
    if arr_len == 0 {
        return None;
    }

    let mut root = Box::new(ListNode::new(arr[0]));

    // 创建一个可变引用
    let mut node = &mut root;

    for i in 1..arr_len {
        node.next = Some(Box::new(ListNode::new(arr[i])));
        node = node.next.as_mut().unwrap();
    }

    Some(root)
}

pub fn print_list(root: Option<Box<ListNode>>) {
    let mut root = root;
    let mut result = String::new();
    let mut node = &root;

    while node.is_some() {
        let number = node.as_ref().unwrap().val;
        result += &number.to_string();
        result += " -> ";
        node = &node.as_ref().unwrap().next;
    }

    println!("{:?}", result);
}
