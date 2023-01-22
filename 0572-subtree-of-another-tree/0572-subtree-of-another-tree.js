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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root && !subRoot) return true;
    if(!root || !subRoot) return false;
    if(sameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function sameTree(root, node) {
    if(!root && !node) return true;
    if(!root || !node) return false;
    if(root.val === node.val) return sameTree(root.left, node.left) && sameTree(root.right, node.right);
    return false;
}