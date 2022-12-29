/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  let output = [];
  recurse(root, output);
  return output;
}

function recurse(node: TreeNode | null, output: number[]): void {
  if (node === null) {
    return;
  }
  recurse(node.left, output);
  output.push(node.val);
  recurse(node.right, output);
}

/**
 * Iterative InOrder solution
 */

function inOrederIterative(root: TreeNode | null): number[] {
  let answer: number[] = [];
  let stack: TreeNode[] = [];
  if (root != null) {
    stack.push(root);
  }
  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr != null && curr.right != null) {
      stack.push(curr.right);
    }
    if (curr != null) {
      answer.push(curr.val);
    }
    if (curr != null && curr.left != null) {
      stack.push(curr.left);
    }
  }
  return answer;
}
