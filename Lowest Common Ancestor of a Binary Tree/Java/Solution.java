public class Solution {
    /**
     * 定义延拓法:
     * lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
     * 这个函数题目给出的的定义为以root为根节点的的二叉树中p与q的公共祖先节点
     * 题目中给出的案例中root树中都会有pq节点
     * 但是递归过程中子树可能不存在某个节点或者两个节点都不存在的情况
     * 现在我们对lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)定义进行延拓
     * 记为helper(TreeNode root, TreeNode p, TreeNode q)
     * 规定root中若只存在p与q其中一个节点时,返回存在的那个节点;若p与q都不在root中返回null
     * 若两个节点p与q均存在就遵循题目的定义
     * 而题目给出的测试的案例均是root中p与q均存在,充其量就是我们延拓函数的一个特例罢了
     * 满足所有测试案例
     */
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        return helper(root, p, q);
    }

    /*
    延拓函数:针对特例会有对应的返回
    */
    private TreeNode helper(TreeNode root, TreeNode p, TreeNode q) {
        // 根节点都为空,那么root为根的树中必定没有p与q
        // 或者这么说,p与q均为null满足为null的子节点,也返回null
        if (root == null) {
            return null;
        }
        // 最近公共祖先的情况1:p或q直接为root,那么p或q就是所求
        // 这里具体又可以分为几种情况:(设定p == root, q == root同理)
        // 1.p与q均存在于root中,结论显然成立,返回p
        // 2.p存在但q不存在root中,根据helper()定义,返回存在的那个节点,返回p
        if (root == p) {
            return p;
        }
        // 同理
        if (root == q) {
            return q;
        }
        // 递归求出root左右子树中p与q的最近公共祖先(经helper()延拓后的结果)
        TreeNode left = helper(root.left, p, q);
        TreeNode right = helper(root.right, p, q);
        // 最近公共祖先的情况2:p与q分居root异侧
        // 这种情况就是左右两边各有一个p或q,root必定为所求
        if (left != null && right != null) {
            return root;
        }
        // left == null && right != null时,左边没有 右边有 的情况
        // 最近公共祖先就是右边找到的那个(注意是已经递归出栈将祖先找出来了!)
        if (left == null) {
            return right;
        }
        // 同理
        if (right == null) {
            return left;
        }
        // left == null && right == null时
        // root两边都找不到,root本身也不是p或q,root又不为null,根据helper()定义返回null
        return null;
    }
}