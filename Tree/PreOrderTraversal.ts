//   Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  let output = [];
  recurse(root, output);
  return output;
}

function recurse(node: TreeNode | null, output: number[]): void {
  if (node == null) {
    return;
  }
  output.push(node.val);
  recurse(node.left, output);
  recurse(node.right, output);
}
