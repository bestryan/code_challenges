// 226. Invert Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time complexity: O(n)
// Space complexity: O(n)
// n is the number of nodes
var invertTree = function (root) {
  if (root === null) return null;
  let temVar = root.right;
  root.right = root.left;
  root.left = temVar;

  invertTree(root.right);
  invertTree(root.left);

  return root;
};

// 110. Balanced Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let result = true;

  let maxDepth = (node) => {
    if (!node) return 0;
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);
    if (Math.abs(left - right) > 1) result = false;
    return 1 + Math.max(left, right);
  };

  maxDepth(root);
  return result;
};
