/*
 * @lc app=leetcode.cn id=700 lang=typescript
 *
 * [700] 二叉搜索树中的搜索
 *
 * https://leetcode-cn.com/problems/search-in-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (77.41%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    124.7K
 * Total Submissions: 161.1K
 * Testcase Example:  '[4,2,7,1,3]\n2'
 *
 * 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 * 
 * 例如，
 * 
 * 
 * 给定二叉搜索树:
 * 
 * ⁠       4
 * ⁠      / \
 * ⁠     2   7
 * ⁠    / \
 * ⁠   1   3
 * 
 * 和值: 2
 * 
 * 
 * 你应该返回如下子树:
 * 
 * 
 * ⁠     2     
 * ⁠    / \   
 * ⁠   1   3
 * 
 * 
 * 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。
 * 
 */

// @lc code=start
  // class TreeNode {
  //     val: number
  //     left: TreeNode | null
  //     right: TreeNode | null
  //     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
  //         this.val = (val===undefined ? 0 : val)
  //         this.left = (left===undefined ? null : left)
  //         this.right = (right===undefined ? null : right)
  //    }
  // }

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root.val===val) return root
  let result =null
  if(root.left){
    result = searchBST(root.left,val)
  }
  if(result) return result
  if(root.right){
    result = searchBST(root.right,val)
  }
  return result
};
// @lc code=end

//[18,2,22,null,null,null,63,null,84,null,null]
